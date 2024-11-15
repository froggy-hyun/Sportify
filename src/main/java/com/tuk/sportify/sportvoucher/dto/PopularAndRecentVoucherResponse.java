package com.tuk.sportify.sportvoucher.dto;

import java.util.List;

public record PopularAndRecentVoucherResponse(
    List<VoucherResponse> popularVouchers,
    List<VoucherResponse> recentVouchers
) {}
