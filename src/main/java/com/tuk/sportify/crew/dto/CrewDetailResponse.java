package com.tuk.sportify.crew.dto;

import lombok.Builder;

import java.util.List;

@Builder
public record CrewDetailResponse(
    Long crewId,
    String crewName,
    List<String> rules,
    List<String> goals,
    String difficultyLevel,
    Integer capacity,
    Integer numberOfParticipants,
    String genderRule
) {}
