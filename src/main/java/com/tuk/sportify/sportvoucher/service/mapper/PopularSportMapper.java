package com.tuk.sportify.sportvoucher.service.mapper;

import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.sportvoucher.dto.PopularSportResponse;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PopularSportMapper {
    public List<PopularSportResponse> toPopularSportResponses(final List<SportVoucher> sportVouchers) {
        return sportVouchers.stream()
                .map(this::toPopularSportResponse)
                .toList();
    }

    public PopularSportResponse toPopularSportResponse(final SportVoucher sportVoucher) {
        return PopularSportResponse.builder()
                .voucherId(sportVoucher.getId())
                .sportName(sportVoucher.getCourse().getName())
                .address(sportVoucher.getFacility().getBasicAddress())
                .duration(sportVoucher.getCourse().getDuration())
                .subCategory(sportVoucher.getMiddleCategory().getName())
                .requestNumberOfPerson(sportVoucher.getCourse().getRequestNumberOfPerson())
                .build();
    }
}
