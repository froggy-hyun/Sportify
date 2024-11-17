package com.tuk.sportify.sportvoucher.dto;

import java.util.List;

public record PopularVoucherResponse(
    List<VoucherResponse> popularVouchers
) {}
