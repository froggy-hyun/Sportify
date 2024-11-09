package com.tuk.sportify.sportvoucher.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;

@Embeddable
@Getter
public class Course {

    @Column(name = "course_name")
    private String name;
    @Column(name = "course_code")
    private String code;
    @Column(name = "course_begin_at")
    private String beginAt;
    @Column(name = "course_end_at")
    private String endAt;
    @Column(name = "course_price")
    private Integer price;
    @Column(name = "course_request_number_of_person")
    private Integer requestNumberOfPerson;
    @Column(name = "course_established_year")
    private String establishedYear;
    @Column(name = "course_established_month")
    private String establishedMonth;
}
