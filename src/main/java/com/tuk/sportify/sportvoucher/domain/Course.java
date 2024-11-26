package com.tuk.sportify.sportvoucher.domain;

import com.tuk.sportify.global.utils.SportifyDateFormatter;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import lombok.Getter;

@Embeddable
@Getter
public class Course {

    @Column(name = "COURSE_NM")
    private String name;

    @Column(name = "COURSE_NO")
    private String code;

    @Column(name = "COURSE_BEGIN_DE")
    private Integer beginAt;

    @Column(name = "COURSE_END_DE")
    private Integer endAt;

    @Column(name = "COURSE_PRC")
    private Integer price;

    @Column(name = "COURSE_REQST_NMPR_CO")
    private Integer requestNumberOfPerson;

    @Column(name = "COURSE_ESTBL_YEAR")
    private String establishedYear;

    @Column(name = "COURSE_ESTBL_MT")
    private String establishedMonth;

    public String getDuration(){
        return SportifyDateFormatter.createCourseDuration(beginAt.toString(),endAt.toString());
    }
}
