package com.tuk.sportify.crewapplicant.controller;

import com.tuk.sportify.crewapplicant.dto.ApplicationResponse;
import com.tuk.sportify.crewapplicant.service.CrewApplicantService;
import com.tuk.sportify.global.argumentresolver.AuthenticationMember;
import com.tuk.sportify.global.response.IdResponse;
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
public class CrewApplicantController {

    private final CrewApplicantService crewApplicantService;

    // 크루 참여 요청
    @PostMapping("/crew/{crewId}")
    @ResponseStatus(HttpStatus.CREATED)
    public ApplicationResponse participateRequest(@AuthenticationMember final Long memberId,
        @PathVariable final Long crewId){
        return crewApplicantService.participate(memberId, crewId);
    }

    // 참여 승인
    @PatchMapping("/{applicantId}")
    public void approve(@AuthenticationMember final Long memberId,
        @PathVariable final Long applicantId){
        crewApplicantService.approve(memberId,applicantId);
    }

    // 참여 거절
}
