package com.tuk.sportify.sportvoucher.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import lombok.Getter;

@Embeddable
@Getter
public class Item {

    @Column(name = "ITEM_NM")
    private String subCategory;

    @Column(name = "ITEM_CD")
    private String code;
}
