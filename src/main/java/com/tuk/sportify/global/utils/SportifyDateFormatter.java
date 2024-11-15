package com.tuk.sportify.global.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

public class SportifyDateFormatter {

    public static String getSportifyDate(){
        SimpleDateFormat sportifyDateFormat = new SimpleDateFormat("yyyyMM");
        return sportifyDateFormat.format(new Date());
    }
}
