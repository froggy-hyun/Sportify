package com.tuk.sportify.sportvoucher.service;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.facade.service.CrewVoucherFacadeService;
import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.global.utils.SportifyDateFormatter;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.sportvoucher.dto.PopularVoucherResponse;
import com.tuk.sportify.sportvoucher.dto.VoucherDetailResponse;
import com.tuk.sportify.sportvoucher.dto.VoucherResponse;
import com.tuk.sportify.sportvoucher.dto.VoucherSearchResponse;
import com.tuk.sportify.sportvoucher.exception.SportVoucherNotFoundException;
import com.tuk.sportify.sportvoucher.repository.SportVoucherRepository;

import com.tuk.sportify.sportvoucher.service.mapper.SportVoucherMapper;
import java.util.List;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Limit;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class SportVoucherService {

    private final SportVoucherRepository sportVoucherRepository;
    private final SportVoucherMapper sportVoucherMapper;
    private final CrewVoucherFacadeService crewVoucherFacadeService;

    public PopularVoucherResponse findPopularVoucher(final Integer fetchSize) {
        Integer currentDate = SportifyDateFormatter.getCurrentDate();
        return new PopularVoucherResponse(findPopularVouchers(fetchSize, currentDate));
    }

    private List<VoucherResponse> findPopularVouchers(
            final Integer fetchSize,
            final Integer currentDate) {
        List<SportVoucher> sportVouchers =
                // TODO : 위도 경도 변환 끝나면 수정
                sportVoucherRepository.findPopularVoucherByCityAndGu("서울","강남구",currentDate,
                    Limit.of(fetchSize));
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

    public VoucherSearchResponse searchVoucherByMiddleCategory(final Long middleCategoryId) {
        final Integer currentDate = SportifyDateFormatter.getCurrentDate();
        final List<SportVoucher> sportVouchers =
                // TODO : 위도 경도 변환 끝나면 수정
                sportVoucherRepository.findByMiddleCategoryJoinFetch("서울","강남구",middleCategoryId,currentDate);
        return sportVoucherMapper.toVoucherSearchResponse(sportVouchers);
    }
}
