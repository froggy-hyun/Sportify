package com.tuk.sportify.vouchermember.dto;

public record MyCrew(
    Long crewId,
    String crewName,
    String voucherCourseName,
    String duration,
    String imageUrl
) {

}
