package com.tuk.sportify.sportvoucher.dto;

public record VoucherResponse(
    Long voucherId,
    String voucherCourseName,
    String subCategory,
    String address,
    String duration
) {}
