package com.tuk.sportify.crewapplicant.service;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.crew.service.CrewService;
import com.tuk.sportify.crewapplicant.domain.CrewApplicant;
import com.tuk.sportify.crewapplicant.dto.ApplicationResponse;
import com.tuk.sportify.crewapplicant.exception.CrewApplicantNotFound;
import com.tuk.sportify.crewapplicant.repository.CrewApplicantRepository;
import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.service.MemberService;

import com.tuk.sportify.vouchermember.domain.VoucherMember;
import com.tuk.sportify.vouchermember.service.VoucherMemberService;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CrewApplicantService {

    private final CrewApplicantRepository crewApplicantRepository;
    private final MemberService memberService;
    private final CrewService crewService;
    private final VoucherMemberService voucherMemberService;

    @Transactional
    public ApplicationResponse participate(final Long memberId, final Long crewId){
        final Member member = memberService.getMemberById(memberId);
        final Crew crew = crewService.getCrew(crewId);
        final CrewApplicant crewApplicant = new CrewApplicant(crew, member);
        crewApplicantRepository.save(crewApplicant);
        return new ApplicationResponse(crewApplicant.getId());
    }

    @Transactional
    public void approve(final Long memberId, final Long applicantId){
        final CrewApplicant crewApplicant = crewApplicantRepository.findByIdJoinFetch(applicantId)
            .orElseThrow(() -> new CrewApplicantNotFound(ErrorCode.CREW_APPLICANT_NOT_FOUND));
        final VoucherMember approvedApplicant = crewApplicant.approve(memberId);
        voucherMemberService.participate(approvedApplicant);
    }
}
