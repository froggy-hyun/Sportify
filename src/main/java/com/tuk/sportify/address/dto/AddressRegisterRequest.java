package com.tuk.sportify.address.dto;


import io.swagger.v3.oas.annotations.media.Schema;

public record AddressRegisterRequest(
    @Schema(description = "주소지 위도")
    double latitude,
    @Schema(description = "주소지 경도")
    double longitude,
    @Schema(description = "주소지")
    String address,
    @Schema(description = "주소지 이름")
    String addressName
) {}
