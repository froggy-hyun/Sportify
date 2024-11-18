package com.tuk.sportify.crew.service;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.crew.dto.CreateCrewRequest;
import com.tuk.sportify.crew.exception.CrewNotFoundExceptionException;
import com.tuk.sportify.crew.repository.CrewRepository;
import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.global.response.IdResponse;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.service.MemberService;
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

    public void getCrewWithMembers(final Long crewId){
        final Crew crew = getCrew(crewId);
        voucherMemberService.getVoucherMembers(crew);
        // TODO : Member 구체화 되면 Response
    }

    public Crew getCrew(final Long crewId){
        return crewRepository.findById(crewId)
            .orElseThrow(()->new CrewNotFoundExceptionException(ErrorCode.CREW_NOT_FOUND));
    }
}
