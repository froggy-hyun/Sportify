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
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PopularSportService {

    private final PopularSportRepository popularSportRepository;
    private final MemberService memberService;
    private final PopularSportMapper popularSportMapper;

    public List<PopularSportResponse> findPopularSports(Long memberId) {

        final Member member = memberService.getMemberById(memberId);
        final Point locationPoint = member.getAddress().getPoint();
        final int currentDate = SportVoucherConst.CURRENT_DATE.getValue();
        final int radius = SportVoucherConst.POPULAR_VOUCHER_SEARCH_RADIUS.getValue();

        // 현재 날짜와 3개월 전 날짜를 계산
        int threeMonthsAgo = calculateThreeMonthsAgo(currentDate);

        List<SportVoucher> popularVouchers = popularSportRepository.findPopularSports(
                locationPoint, radius, threeMonthsAgo, currentDate, member.isDisabled());

        if (popularVouchers.isEmpty()) {
            throw new PopularSportNotFoundException(ErrorCode.POPULAR_SPORT_NOT_FOUND);
        }

        // 종목별로 신청자 수를 그룹화하고 총합 계산
        Map<String, Integer> sportNameToCount = popularVouchers.stream()
                .collect(Collectors.groupingBy(
                        voucher -> voucher.getMiddleCategory().getName(),
                        Collectors.summingInt(voucher -> voucher.getCourse().getRequestNumberOfPerson())
                ));

        // 상위 3개 종목 반환
        return popularSportMapper.toPopularSportResponses(
                sportNameToCount.entrySet().stream()
                        .sorted((entry1, entry2) -> entry2.getValue().compareTo(entry1.getValue()))
                        .limit(3)
                        .collect(Collectors.toMap(
                                Map.Entry::getKey,
                                Map.Entry::getValue
                        ))
        );
    }

    private int calculateThreeMonthsAgo(int currentDate) {
        // int -> LocalDate 변환
        String currentDateString = String.valueOf(currentDate);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
        LocalDate currentLocalDate = LocalDate.parse(currentDateString, formatter);

        // 3개월 전 날짜 계산
        LocalDate threeMonthsAgoDate = currentLocalDate.minusMonths(3);

        // LocalDate -> int 변환
        return Integer.parseInt(threeMonthsAgoDate.format(formatter));
    }
}
