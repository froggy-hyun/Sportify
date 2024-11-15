package com.tuk.sportify.global.utils;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class SportifyDateFormatter {

    public static Integer getCurrentDate(){
        LocalDate date = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
        return Integer.parseInt(date.format(formatter));
    }
}
