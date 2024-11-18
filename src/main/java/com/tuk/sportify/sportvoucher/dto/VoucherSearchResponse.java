package com.tuk.sportify.sportvoucher.dto;

import java.util.List;
import java.util.Map;

public record VoucherSearchResponse(
    Map<String, List<VoucherResponse>> voucherGroups
) {}
