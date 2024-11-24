package com.tuk.sportify.crew.dto;

import com.tuk.sportify.crew.domain.DifficultyLevel;
import com.tuk.sportify.crew.domain.GenderRule;
import com.tuk.sportify.crew.domain.Goal;

import io.swagger.v3.oas.annotations.media.Schema;

import jakarta.validation.constraints.Size;

import java.util.List;

@Schema
public record CreateCrewRequest(
        @Schema(description = "크루 이름") String crewName,
        @Size(max = 3, message = "목표는 3개까지 지정 가능합니다.") @Schema(description = "목표") List<Goal> goals,
        @Schema(description = "성별 제한") GenderRule genderRule,
        @Size(max = 3, message = "규칙은 3개까지 지정 가능합니다.") @Schema(description = "규칙")
                List<String> rules,
        @Schema(description = "난이도") DifficultyLevel difficultyLevel,
        @Schema(description = "수용 인원") Integer capacity,
        @Schema(description = "이미지 ID") Long imageId) {}
