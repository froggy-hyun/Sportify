package com.tuk.sportify.sportvoucher.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;

public record PopularVoucherResponse(
    @Schema(description = "인기 이용권 리스트, 기준:신청인원수")
    List<VoucherResponse> popularVouchers
) {}
