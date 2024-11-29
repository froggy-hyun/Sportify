package com.tuk.sportify.sportvoucher.service;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum SportVoucherConst {
    POPULAR_VOUCHER_SEARCH_RADIUS(5000),
    VOUCHER_CATEGORY_SEARCH_RADIUS(5000),
    CURRENT_DATE(20241101);

    private final int value;
}
