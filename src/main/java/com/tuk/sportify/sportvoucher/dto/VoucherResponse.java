package com.tuk.sportify.sportvoucher.dto;

import java.util.List;
import lombok.Builder;

@Builder
public record VoucherResponse(
        Long voucherId,
        String voucherCourseName,
        String subCategory,
        String address,
        String duration,
        List<CrewResponse> crews) {}
