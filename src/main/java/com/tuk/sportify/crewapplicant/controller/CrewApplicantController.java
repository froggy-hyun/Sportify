package com.tuk.sportify.crewapplicant.controller;

import com.tuk.sportify.crewapplicant.dto.ApplicationResponse;
import com.tuk.sportify.crewapplicant.service.CrewApplicantService;
import com.tuk.sportify.global.argumentresolver.AuthenticationMember;
import com.tuk.sportify.global.response.ApiErrorCodeExample;
import com.tuk.sportify.global.response.ApiErrorCodeExamples;
import com.tuk.sportify.global.status_code.ErrorCode;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/crew-applicants")
@Tag(name = "크루 지원자 [운동 이웃 신청, 승인, 거부]")
public class CrewApplicantController {

    private final CrewApplicantService crewApplicantService;

    @PostMapping("/crew/{crewId}")
    @ResponseStatus(HttpStatus.CREATED)
    @ApiErrorCodeExamples({ErrorCode.DUPLICATED_PARTICIPATION,ErrorCode.CREW_NOT_FOUND,ErrorCode.MEMBER_NOT_FOUND})
    @Operation(summary = "크루 참여", description = "특정 크루에 참여 요청을 생성합니다.")
    public ApplicationResponse participateRequest(
            @AuthenticationMember @Parameter(hidden = true) final Long memberId,
            @PathVariable @Parameter(description = "크루 ID") final Long crewId) {
        return crewApplicantService.participate(memberId, crewId);
    }

    @PatchMapping("/{applicantId}/ack")
    @Operation(summary = "크루 참여 승인", description = "참여 요청을 승인합니다.")
    @ApiErrorCodeExamples({ErrorCode.CREW_APPLICANT_NOT_FOUND, ErrorCode.EXCEED_CAPACITY})
    public void approve(
            @AuthenticationMember @Parameter(hidden = true) final Long memberId,
                @PathVariable @Parameter(description = "지원자 ID") final Long applicantId) {
        crewApplicantService.approve(memberId, applicantId);
    }

    @PatchMapping("/{applicantId}/nack")
    @Operation(summary = "크루 참여 거절", description = "참여 요청을 거절합니다.")
    @ApiErrorCodeExample(ErrorCode.CREW_APPLICANT_NOT_FOUND)
    public void reject(
            @AuthenticationMember @Parameter(hidden = true) final Long memberId,
                @PathVariable @Parameter(description = "지원자 ID") final Long applicantId) {
        crewApplicantService.reject(memberId, applicantId);
    }
}
