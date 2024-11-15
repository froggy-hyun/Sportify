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
        // 당월을 표현하는 Date
        String currentDate = SportifyDateFormatter.getCurrentDate();
        // 익월을 표현하는 Date (개설은 됐지만 시작되지 않은 이용권)
        String nextMonthDate = SportifyDateFormatter.getNextMonthDate();
        return new PopularAndRecentVoucherResponse(
            findPopularVouchers(city, gu, popularVoucherFetchSize, currentDate,nextMonthDate),
            findRecentVouchers(city, gu, recentVoucherFetchSize, currentDate,nextMonthDate)
        );
    }

    private List<VoucherResponse> findRecentVouchers(final String city, final String gu,
        final Integer recentVoucherFetchSize, final String currentDate, final String nextMothDate) {
        List<SportVoucher> recentVouchers = sportVoucherRepository.findRecentVoucherByCityAndGu(
            city, gu, currentDate,nextMothDate, Limit.of(recentVoucherFetchSize));
        return sportVoucherMapper.toVoucherResponses(recentVouchers);
    }

    private List<VoucherResponse> findPopularVouchers(final String city, final String gu,
        final Integer popularVoucherFetchSize, final String currentDate, final String nextMothDate) {
        List<SportVoucher> sportVouchers = sportVoucherRepository.findPopularVoucherByCityAndGu(
            city, gu, currentDate,nextMothDate, Limit.of(popularVoucherFetchSize));
        return sportVoucherMapper.toVoucherResponses(sportVouchers);
    }
}
