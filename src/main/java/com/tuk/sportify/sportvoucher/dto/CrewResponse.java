package com.tuk.sportify.sportvoucher.dto;

import lombok.Builder;

@Builder
public record CrewResponse(
        Long crewId,
        String crewName,
        String difficultyLevel,
        Integer capacity,
        String genderRule,
        Integer numberOfParticipants) {}
