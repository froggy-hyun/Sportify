package com.tuk.sportify.crewapplicant.service;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.crew.service.CrewService;
import com.tuk.sportify.crewapplicant.domain.CrewApplicant;
import com.tuk.sportify.crewapplicant.repository.CrewApplicantRepository;
import com.tuk.sportify.global.response.IdResponse;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.service.MemberService;
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

    @Transactional
    public IdResponse participate(final Long memberId, final Long crewId){
        final Member member = memberService.getMemberById(memberId);
        final Crew crew = crewService.getCrew(crewId);
        final CrewApplicant crewApplicant = new CrewApplicant(crew, member);
        crewApplicantRepository.save(crewApplicant);
        return new IdResponse(crewApplicant.getId());
    }
}
