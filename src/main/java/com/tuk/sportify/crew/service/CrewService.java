package com.tuk.sportify.crew.service;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.crew.dto.CreateCrewRequest;
import com.tuk.sportify.crew.repository.CrewRepository;
import com.tuk.sportify.global.response.IdResponse;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.service.MemberService;
import com.tuk.sportify.vouchermember.domain.VoucherMember;
import com.tuk.sportify.vouchermember.service.VoucherMemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CrewService {

    private final CrewRepository crewRepository;
    private final VoucherMemberService voucherMemberService;
    private final MemberService memberService;

    public IdResponse createCrew(final Long memberId,
        final Long sportVoucherId, final CreateCrewRequest request){
        Member member = memberService.getMemberById(memberId).get();
        final Crew crew = new Crew(member, request.crewName(), request.content());
        crewRepository.save(crew);
        voucherMemberService.participate(crew,sportVoucherId);
        return new IdResponse(crew.getId());
    }
}
