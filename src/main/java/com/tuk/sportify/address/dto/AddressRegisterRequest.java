package com.tuk.sportify.address.dto;


import io.swagger.v3.oas.annotations.media.Schema;

public record AddressRegisterRequest(
    @Schema(description = "주소지 위도", example = "37.57015")
    double latitude,
    @Schema(description = "주소지 경도", example = "126.9772")
    double longitude,
    @Schema(description = "주소지",example = "서울특별시 종로구 세종로 139-1")
    String address,
    @Schema(description = "주소지 이름", example = "회사")
    String addressName
) {}
