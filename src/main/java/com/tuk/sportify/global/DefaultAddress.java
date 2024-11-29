package com.tuk.sportify.global;

import com.tuk.sportify.address.domain.Address;
import com.tuk.sportify.global.utils.GeometryConverter;

public class DefaultAddress extends Address {
    private static final String DEFAULT_ADDRESS_NAME = "기본 주소지";
    private static final String DETAIL_ADDRESS = "서울특별시 중구 세종대로 110";
    private static final double DEFAULT_LATITUDE = 37.5665851;
    private static final double DEFAULT_LONGITUDE = 126.9782038;

    private DefaultAddress() {
        super(GeometryConverter.coordinateToPoint(DEFAULT_LATITUDE,DEFAULT_LONGITUDE),
            DETAIL_ADDRESS,
            DEFAULT_ADDRESS_NAME);
    }

    private static class SingleInstanceHolder {
        private static final DefaultAddress INSTANCE = new DefaultAddress();
    }

    public static Address getInstance() {
        return SingleInstanceHolder.INSTANCE;
    }
}
