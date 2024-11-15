package com.tuk.sportify.sportvoucher.dto;

import java.util.List;

public record PopularAndNewVoucherResponse(
    List<VoucherResponse> popularVouchers,
    List<VoucherResponse> newVouchers
) {}
