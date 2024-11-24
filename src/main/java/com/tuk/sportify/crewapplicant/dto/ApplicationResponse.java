package com.tuk.sportify.crewapplicant.dto;

import io.swagger.v3.oas.annotations.Parameter;

public record ApplicationResponse(@Parameter(description = "지원자 ID") Long applicantId) {}
