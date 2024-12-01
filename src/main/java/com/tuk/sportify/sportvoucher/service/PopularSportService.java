package com.tuk.sportify.sportvoucher.service;

import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.service.MemberService;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.sportvoucher.dto.PopularSportResponse;
import com.tuk.sportify.sportvoucher.exception.PopularSportNotFoundException;
import com.tuk.sportify.sportvoucher.repository.PopularSportRepository;
import com.tuk.sportify.sportvoucher.service.mapper.PopularSportMapper;
import lombok.RequiredArgsConstructor;
import org.locationtech.jts.geom.Point;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PopularSportService {

    private final PopularSportRepository popularSportRepository;
    private final MemberService memberService;
    private final PopularSportMapper popularSportMapper;

    public Map<String, List<PopularSportResponse>> findPopularSportsByMonth(Long memberId) {

        final Member member = memberService.getMemberById(memberId);
        final Point locationPoint = member.getAddress().getPoint();
        final int currentDate = SportVoucherConst.CURRENT_DATE.getValue();
        final int radius = SportVoucherConst.POPULAR_VOUCHER_SEARCH_RADIUS.getValue();

        // 3개월 전부터 1개월 전까지의 기간 계산
        Map<String, int[]> periods = calculateMonthlyPeriods(currentDate);

        // 각 월별 인기 스포츠를 조회하여 결과를 맵으로 저장
        Map<String, List<PopularSportResponse>> monthlyResponses = new LinkedHashMap<>();
        for (Map.Entry<String, int[]> entry : periods.entrySet()) {
            String periodKey = entry.getKey();
            int monthStart = entry.getValue()[0];
            int monthEnd = entry.getValue()[1];

            List<SportVoucher> popularVouchers = popularSportRepository.findPopularSportsForMonth(
                    locationPoint, radius, monthStart, monthEnd, member.isDisabled()
            );

            Map<String, Integer> sportNameToCount = popularVouchers.stream()
                    .collect(Collectors.groupingBy(
                            voucher -> voucher.getMiddleCategory().getName(),
                            Collectors.summingInt(voucher -> voucher.getCourse().getRequestNumberOfPerson())
                    ));

            List<PopularSportResponse> top3Sports = popularSportMapper.toPopularSportResponses(
                    sportNameToCount.entrySet().stream()
                            .sorted((entry1, entry2) -> entry2.getValue().compareTo(entry1.getValue()))
                            .limit(3)
                            .collect(Collectors.toMap(
                                    Map.Entry::getKey,
                                    Map.Entry::getValue
                            ))
            );

            monthlyResponses.put(periodKey, top3Sports);
        }

        if (monthlyResponses.isEmpty()) {
            throw new PopularSportNotFoundException(ErrorCode.POPULAR_SPORT_NOT_FOUND);
        }

        return monthlyResponses;
    }

    private Map<String, int[]> calculateMonthlyPeriods(int currentDate) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
        LocalDate currentLocalDate = LocalDate.parse(String.valueOf(currentDate), formatter);

        // 3개월 전, 2개월 전, 1개월 전 각각의 시작/끝 날짜 계산
        Map<String, int[]> periods = new LinkedHashMap<>();
        for (int i = 3; i >= 1; i--) {
            LocalDate monthStart = currentLocalDate.minusMonths(i).withDayOfMonth(1);
            LocalDate monthEnd = monthStart.withDayOfMonth(monthStart.lengthOfMonth());
            periods.put(i + "개월 전", new int[]{
                    Integer.parseInt(monthStart.format(formatter)),
                    Integer.parseInt(monthEnd.format(formatter))
            });
        }
        return periods;
    }
}
