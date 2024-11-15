package com.tuk.sportify.sportvoucher.service;

import com.tuk.sportify.global.error.ErrorCode;
import com.tuk.sportify.global.utils.SportifyDateFormatter;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.sportvoucher.dto.PopularAndNewVoucherResponse;
import com.tuk.sportify.sportvoucher.dto.VoucherResponse;
import com.tuk.sportify.sportvoucher.exception.SportVoucherNotFound;
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

    public PopularAndNewVoucherResponse findPopularAndRecentVoucher(
            final String city,
            final String gu,
            final Integer popularVoucherFetchSize,
            final Integer recentVoucherFetchSize) {
        Integer currentDate = SportifyDateFormatter.getCurrentDate();
        return new PopularAndNewVoucherResponse(
            findPopularVouchers(city, gu, popularVoucherFetchSize, currentDate),
            findNewVouchers(city, gu, recentVoucherFetchSize, currentDate)
        );
    }

    private List<VoucherResponse> findNewVouchers(final String city, final String gu,
        final Integer fetchSize, final Integer currentDate) {
        List<SportVoucher> recentVouchers = sportVoucherRepository.findNewVoucherByCityAndGu(
            city, gu, currentDate, Limit.of(fetchSize));
        return sportVoucherMapper.toVoucherResponses(recentVouchers);
    }

    private List<VoucherResponse> findPopularVouchers(final String city, final String gu,
        final Integer fetchSize, final Integer currentDate) {
        List<SportVoucher> sportVouchers = sportVoucherRepository.findPopularVoucherByCityAndGu(
            city, gu, currentDate, Limit.of(fetchSize));
        return sportVoucherMapper.toVoucherResponses(sportVouchers);
    }

    public SportVoucher getSportVoucher(final Long sportVoucherId) {
        SportVoucher sportVoucher = sportVoucherRepository
            .findById(sportVoucherId)
            .orElseThrow(() -> new SportVoucherNotFound(ErrorCode.SPORT_VOUCHER_NOT_FOUND));
        final Integer currentDate = SportifyDateFormatter.getCurrentDate();
        sportVoucher.validateOpening(currentDate);
        return sportVoucher;
    }
}
