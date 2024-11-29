package com.tuk.sportify.sportvoucher.dto;

import lombok.Builder;
import lombok.Getter;


@Getter
@Builder
public class PopularSportResponse {
    private Long voucherId;
    private String sportName;
    private String address;
    private String duration;
    private String subCategory;
    private int requestNumberOfPerson;
}
