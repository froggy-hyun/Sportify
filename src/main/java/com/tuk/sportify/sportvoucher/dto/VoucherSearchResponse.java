package com.tuk.sportify.sportvoucher.dto;

import java.util.List;

public record VoucherSearchResponse(
    List<VoucherResponse> voucherResponses
) {}
