package com.tuk.sportify.popularsport.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PopularSportResponse {

    private String itemName;
    private int requestNumberOfPerson;
    private double latitude;
    private double longitude;
    private boolean disabled;
}
