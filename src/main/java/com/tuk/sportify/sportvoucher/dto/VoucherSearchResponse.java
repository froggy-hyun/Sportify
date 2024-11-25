package com.tuk.sportify.sportvoucher.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import java.util.Map;

public record VoucherSearchResponse(
    Map<String, List<VoucherResponse>> voucherGroups
) {}
