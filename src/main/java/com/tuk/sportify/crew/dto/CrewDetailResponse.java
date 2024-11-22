package com.tuk.sportify.crew.dto;

import com.tuk.sportify.crew.domain.DifficultyLevel;
import java.util.List;
import lombok.Builder;

@Builder
public record CrewDetailResponse(
    Long crewId,
    String crewName,
    List<String> rules,
    List<String> goals,
    String difficultyLevel,
    Integer capacity,
    Integer numberOfParticipants
) {}
