package com.tuk.sportify.sportvoucher.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PopularSportRequest {
    private double latitude;
    private double longitude;
    private int fetchSize; // 가져올 데이터 개수
}
