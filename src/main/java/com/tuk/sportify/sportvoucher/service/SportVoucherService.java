package com.tuk.sportify.sportvoucher.service;

import com.tuk.sportify.global.utils.SportifyDateFormatter;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.sportvoucher.dto.PopularAndRecentVoucherResponse;
import com.tuk.sportify.sportvoucher.dto.VoucherResponse;
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

    public PopularAndRecentVoucherResponse findPopularAndRecentVoucher(
            final String city,
            final String gu,
            final Integer popularVoucherFetchSize,
            final Integer recentVoucherFetchSize) {
        String date = SportifyDateFormatter.getSportifyDate();
        return new PopularAndRecentVoucherResponse(
            findPopularVouchers(city, gu, popularVoucherFetchSize, date),
            findRecentVouchers(city, gu, recentVoucherFetchSize, date)
        );
    }

    private List<VoucherResponse> findRecentVouchers(final String city, final String gu,
        final Integer recentVoucherFetchSize,
        final String date) {
        List<SportVoucher> recentVouchers = sportVoucherRepository.findRecentVoucherByCityAndGu(
            city, gu, date, Limit.of(recentVoucherFetchSize));
        return sportVoucherMapper.toVoucherResponses(recentVouchers);
    }

    private List<VoucherResponse> findPopularVouchers(final String city, final String gu,
        final Integer popularVoucherFetchSize, final String date) {
        List<SportVoucher> sportVouchers = sportVoucherRepository.findPopularVoucherByCityAndGu(
            city, gu, date, Limit.of(popularVoucherFetchSize));
        return sportVoucherMapper.toVoucherResponses(sportVouchers);
    }
}
