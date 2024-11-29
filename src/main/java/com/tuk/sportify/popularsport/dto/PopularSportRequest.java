package com.tuk.sportify.popularsport.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PopularSportRequest {

    private double latitude;
    private double longitude;
    private double radius;
}
