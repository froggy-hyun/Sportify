package com.tuk.sportify.sportvoucher.service;

import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.service.MemberService;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.sportvoucher.dto.PopularSportRequest;
import com.tuk.sportify.sportvoucher.dto.PopularSportResponse;
import com.tuk.sportify.sportvoucher.exception.InvalidPopularSportRequestException;
import com.tuk.sportify.sportvoucher.exception.PopularSportNotFoundException;
import com.tuk.sportify.sportvoucher.repository.PopularSportRepository;
import com.tuk.sportify.sportvoucher.service.mapper.PopularSportMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PopularSportService {

    private final PopularSportRepository popularSportRepository;
    private final MemberService memberService;
    private final PopularSportMapper popularSportMapper;

    public List<PopularSportResponse> findPopularSports(Long memberId, PopularSportRequest request) {

        // 요청 유효성 검증
        if (request.getFetchSize() <= 0 || request.getLatitude() == 0 || request.getLongitude() == 0) {
            throw new InvalidPopularSportRequestException(ErrorCode.INVALID_POPULAR_SPORT_REQUEST);
        }

        final Member member = memberService.getMemberById(memberId);
        final String locationWKT = String.format("POINT(%f %f)", request.getLongitude(), request.getLatitude());
        final int currentDate = SportVoucherConst.CURRENT_DATE.getValue();
        final int radius = SportVoucherConst.POPULAR_VOUCHER_SEARCH_RADIUS.getValue();

        List<SportVoucher> popularVouchers = popularSportRepository.findPopularSports(
                locationWKT, radius, currentDate, member.isDisabled());

        if (popularVouchers.isEmpty()) {
            throw new PopularSportNotFoundException(ErrorCode.POPULAR_SPORT_NOT_FOUND);
        }

        return popularSportMapper.toPopularSportResponses(popularVouchers.stream()
                .limit(request.getFetchSize())
                .toList());
    }
}
