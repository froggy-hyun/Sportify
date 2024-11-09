package com.tuk.sportify.sportvoucher.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import lombok.Getter;

@Embeddable
@Getter
public class Facility {
    @Column(name = "facility_name")
    private String name;

    @Column(name = "city_name")
    private String city;

    @Column(name = "gu_name")
    private String gu;

    @Column(name = "city_code")
    private String cityCode;

    @Column(name = "city_gu_code")
    private String cityGuCode;

    @Column(name = "zip_code")
    private String zipCode;

    @Column(name = "detail_address")
    private String detailAddress;

    @Column(name = "address")
    private String basicAddress;

    @Column(name = "tel_number")
    private String telNumber;
}
