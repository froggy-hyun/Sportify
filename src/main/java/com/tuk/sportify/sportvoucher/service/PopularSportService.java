package com.tuk.sportify.sportvoucher.service;

import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.service.MemberService;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.sportvoucher.dto.PopularSportRequest;
import com.tuk.sportify.sportvoucher.dto.PopularSportResponse;
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
        final Member member = memberService.getMemberById(memberId);
        final String locationWKT = String.format("POINT(%f %f)", request.getLongitude(), request.getLatitude());
        final int currentDate = SportVoucherConst.CURRENT_DATE.getValue();
        final int radius = SportVoucherConst.POPULAR_VOUCHER_SEARCH_RADIUS.getValue();

        List<SportVoucher> popularVouchers = popularSportRepository.findPopularSports(
                locationWKT, radius, currentDate, member.isDisabled());

        return popularSportMapper.toPopularSportResponses(popularVouchers.stream()
                .limit(request.getFetchSize())
                .toList());
    }
}
