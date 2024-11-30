package com.tuk.sportify.sportvoucher.dto;

import lombok.Builder;
import lombok.Getter;


@Getter
@Builder
public class PopularSportResponse {

    private String sportName;
    private int totalRequestNumber;

    public PopularSportResponse(String sportName, int totalRequestNumber) {
        this.sportName = sportName;
        this.totalRequestNumber = totalRequestNumber;
    }
}
