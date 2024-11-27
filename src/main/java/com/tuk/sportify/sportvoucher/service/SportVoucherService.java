package com.tuk.sportify.sportvoucher.service;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.facade.service.CrewVoucherFacadeService;
import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.global.utils.SportifyDateFormatter;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.service.MemberService;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.sportvoucher.dto.PopularVoucherResponse;
import com.tuk.sportify.sportvoucher.dto.VoucherDetailResponse;
import com.tuk.sportify.sportvoucher.dto.VoucherResponse;
import com.tuk.sportify.sportvoucher.dto.VoucherSearchResponse;
import com.tuk.sportify.sportvoucher.exception.SportVoucherNotFoundException;
import com.tuk.sportify.sportvoucher.repository.SportVoucherRepository;
import com.tuk.sportify.sportvoucher.service.mapper.SportVoucherMapper;

import lombok.RequiredArgsConstructor;

import org.locationtech.jts.geom.Point;
import org.springframework.data.domain.Limit;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class SportVoucherService {

    private static final Integer SEARCH_RADIUS = 5000;
    private final SportVoucherRepository sportVoucherRepository;
    private final SportVoucherMapper sportVoucherMapper;
    private final CrewVoucherFacadeService crewVoucherFacadeService;
    private final MemberService memberService;

    public PopularVoucherResponse findPopularVoucher(final Long memberId, final Integer fetchSize) {
        final Member member = memberService.getMemberById(memberId);
        final Point address = member.getAddress().getPoint();
        final Integer currentDate = SportifyDateFormatter.getCurrentDate();
        return new PopularVoucherResponse(
                findPopularVouchersByAddress(address, currentDate, fetchSize));
    }

    private List<VoucherResponse> findPopularVouchersByAddress(
            final Point address, final Integer currentDate, final Integer fetchSize) {
        List<SportVoucher> sportVouchers =
                sportVoucherRepository.findPopularVoucherByAddress(
                        address, SEARCH_RADIUS, currentDate, Limit.of(fetchSize));
        return sportVoucherMapper.toVouchersResponse(sportVouchers);
    }

    public VoucherDetailResponse getSportVoucher(final Long sportVoucherId) {
        final SportVoucher sportVoucher = getSportVoucherById(sportVoucherId);
        final List<Crew> crews = crewVoucherFacadeService.findCrews(sportVoucher);
        final Integer currentDate = SportifyDateFormatter.getCurrentDate();
        sportVoucher.validateOpening(currentDate);
        return sportVoucherMapper.toVoucherDetailResponse(sportVoucher, crews);
    }

    public SportVoucher getSportVoucherById(final Long sportVoucherId) {
        return sportVoucherRepository
                .findById(sportVoucherId)
                .orElseThrow(
                        () -> new SportVoucherNotFoundException(ErrorCode.SPORT_VOUCHER_NOT_FOUND));
    }

    public VoucherSearchResponse searchVoucherByCategoryAndAddress(
        final int majorCategoryCode,
        final int middleCategoryCode,
        final Long memberId) {
        final Member member = memberService.getMemberById(memberId);
        final Integer currentDate = SportifyDateFormatter.getCurrentDate();
        final List<SportVoucher> sportVouchers = getSportVouchers(majorCategoryCode,
            middleCategoryCode, member.getAddress().getPoint(), currentDate);
        return sportVoucherMapper.toVoucherSearchResponse(sportVouchers);
    }

    private List<SportVoucher> getSportVouchers(final int majorCategoryCode,
        final int middleCategoryCode, final Point address, final Integer currentDate) {
        return sportVoucherRepository.findByCategoryAndAddressJoinFetch(
                    address,
                    SEARCH_RADIUS,
                    majorCategoryCode,
                    middleCategoryCode,
                    currentDate);
    }
}
