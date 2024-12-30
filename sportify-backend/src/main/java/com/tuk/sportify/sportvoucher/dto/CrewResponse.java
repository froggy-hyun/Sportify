package com.tuk.sportify.sportvoucher.dto;

import lombok.Builder;

@Builder
public record CrewResponse(
        Long crewId,
        String crewName,
        String difficultyLevel,
        Integer crewCapacity,
        String genderRule,
        Integer numberOfParticipants,
        String imageUrl) {}
