package com.tuk.sportify.global.utils;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class SportifyDateFormatter {

    private static final String COURSE_DURATION = "%s~%s";

    public static Integer getCurrentDate(){
//        LocalDate date = LocalDate.now();
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
//        return Integer.parseInt(date.format(formatter));
        // 우선 10월을 현 시점으로 고정
        return 20241001;
    }

    public static String createCourseDuration(final String beginAt, final String endAt){
        final DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyyMMdd");
        final DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("yy.MM.dd");

        final LocalDate parsedBeginAt = LocalDate.parse(beginAt, inputFormatter);
        final LocalDate paredEndAt = LocalDate.parse(endAt, inputFormatter);

        final String formattedBeginAt = parsedBeginAt.format(outputFormatter);
        final String formattedEndAt = paredEndAt.format(outputFormatter);
        return COURSE_DURATION.formatted(formattedBeginAt,formattedEndAt);
    }
}
