package com.tuk.sportify.vouchermember.dto;

import lombok.Builder;

@Builder
public record MyCrew(
    Long crewId,
    String crewName,
    String genderRule,
    String difficultyLevel,
    Integer crewCapacity,
    Integer numberOfParticipants,
    String imageUrl
) {

}
