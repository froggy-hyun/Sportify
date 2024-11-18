package com.tuk.sportify.sportvoucher.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import lombok.Getter;

@Embeddable
@Getter
public class Item {

    @Column(name = "sub_category")
    private String subCategory;

    @Column(name = "item_code")
    private String code;
}
