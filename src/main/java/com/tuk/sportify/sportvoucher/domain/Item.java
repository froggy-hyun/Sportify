package com.tuk.sportify.sportvoucher.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import lombok.Getter;

@Embeddable
@Getter
public class Item {

    @Column(name = "item_name")
    private String name;

    @Column(name = "item_code")
    private String code;
}
