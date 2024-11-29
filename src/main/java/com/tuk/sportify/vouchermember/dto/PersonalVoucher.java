package com.tuk.sportify.vouchermember.dto;

public record PersonalVoucher(
    Long voucherId,
    String voucherCourseName,
    String duration,
    String voucherAddress
) {}
