package com.tuk.sportify.global.utils;

public class StringFormatter {
    private static final String COORDINATE = "%s,%s";
    private static final String COURSE_DURATION = "%s-%s";

    public static String createCoordinate(final String longitude, final String latitude) {
        return COORDINATE.formatted(longitude, latitude);
    }

    public static String createCourseDuration(final String beginAt, final String endAt){
        return COURSE_DURATION.formatted(beginAt,endAt);
    }
}
