package com.tuk.sportify.crew.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Builder;

import java.util.List;

@Builder
public record CrewDetailResponse(
        @Schema(description = "크루 ID") Long crewId,
        @Schema(description = "크루 이름") String crewName,
        @Schema(description = "규칙") List<String> rules,
        @Schema(description = "목표") List<String> goals,
        @Schema(description = "난이도") String difficultyLevel,
        @Schema(description = "최대 수용 인원") Integer capacity,
        @Schema(description = "현재 참여 중인 인원") Integer numberOfParticipants,
        @Schema(description = "성별 제약") String genderRule,
        @Schema(description = "이미지 URL") String imageUrl) {}
