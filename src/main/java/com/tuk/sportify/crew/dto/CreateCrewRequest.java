package com.tuk.sportify.crew.dto;

import com.tuk.sportify.crew.domain.DifficultyLevel;
import com.tuk.sportify.crew.domain.GenderRule;

import com.tuk.sportify.crew.domain.Goal;

import jakarta.validation.constraints.Size;
import java.util.List;

public record CreateCrewRequest(
        String crewName,
        @Size(max = 3, message = "목표는 3개까지 지정 가능합니다.") List<Goal> goals,
        GenderRule genderRule,
        @Size(max = 3, message = "규칙은 3개까지 지정 가능합니다.") List<String> rules,
        DifficultyLevel difficultyLevel,
        Integer capacity) {}
