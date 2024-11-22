package com.tuk.sportify.crew.dto;

import com.tuk.sportify.crew.domain.DifficultyLevel;
import com.tuk.sportify.crew.domain.GenderRule;

import com.tuk.sportify.crew.domain.Goal;
import jakarta.validation.constraints.Max;

import java.util.List;

public record CreateCrewRequest(
        String crewName,
        @Max(value = 3, message = "목표는 3개까지 지정 가능합니다.") List<Goal> goals,
        GenderRule genderRule,
        @Max(value = 3, message = "규칙은 3개까지 지정 가능합니다.") List<String> rules,
        DifficultyLevel difficultyLevel,
        Integer capacity) {}
