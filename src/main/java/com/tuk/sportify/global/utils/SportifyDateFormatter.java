package com.tuk.sportify.global.utils;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class SportifyDateFormatter {

    private static final int NEXT_MONTH = 1;

    public static String getCurrentDate(){
        LocalDate date = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMM");
        return date.format(formatter);
    }

    public static String getNextMonthDate(){
        LocalDate date = LocalDate.now().plusMonths(NEXT_MONTH);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMM");
        return date.format(formatter);
    }
}
