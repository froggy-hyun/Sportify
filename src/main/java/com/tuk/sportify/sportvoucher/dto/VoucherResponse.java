package com.tuk.sportify.sportvoucher.dto;

public record VoucherResponse(
    Long voucherId,
    String voucherCourseName,
    String address,
    String duration
) {}
