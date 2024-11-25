package com.tuk.sportify.address.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;

@Builder
public record AddressResponse(
    @Schema(description = "주소지 Id")
    Long addressId,
    @Schema(description = "주소지")
    String address,
    @Schema(description = "주소지 이름 ex) 내 집, 회사 등")
    String addressName
) {}
