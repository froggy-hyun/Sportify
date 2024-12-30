package com.tuk.sportify.sportvoucher.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import jakarta.persistence.Table;
import lombok.Getter;

@Embeddable
@Getter
public class Facility {
    @Column(name = "FCLTY_NM")
    private String name;

    @Column(name = "CTPRVN_NM")
    private String city;

    @Column(name = "SIGNGU_NM")
    private String gu;

    @Column(name = "CTPRVN_CD")
    private String cityCode;

    @Column(name = "SIGNGU_CD")
    private String cityGuCode;

    @Column(name = "ZIP_NO")
    private String zipCode;

    @Column(name = "FCLTY_DETAIL_ADDR")
    private String detailAddress;

    @Column(name = "FCLTY_ADDR")
    private String basicAddress;

    @Column(name = "TEL_NO")
    private String telNumber;
}
