package com.tuk.sportify.address.util;

public class RequestParamCreator {
    private static final String point = "%s,%s";

    public static String createPoint(final String longitude, final String latitude) {
        return point.formatted(longitude, latitude);
    }
}
