package com.tuk.sportify.sportvoucher.service.mapper;

import com.tuk.sportify.sportvoucher.dto.PopularSportResponse;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public class PopularSportMapper {
    public List<PopularSportResponse> toPopularSportResponses(final Map<String, Integer> sportNameToCount) {
        return sportNameToCount.entrySet().stream()
                .map(entry -> PopularSportResponse.builder()
                        .sportName(entry.getKey())
                        .totalRequestNumber(entry.getValue())
                        .build())
                .toList();
    }
}
