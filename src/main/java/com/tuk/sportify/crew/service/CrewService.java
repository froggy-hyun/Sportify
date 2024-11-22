package com.tuk.sportify.crew.service;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.crew.dto.CreateCrewRequest;
import com.tuk.sportify.crew.exception.CrewNotFoundExceptionException;
import com.tuk.sportify.crew.repository.CrewRepository;
import com.tuk.sportify.crew.service.mapper.CrewMapper;
import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.global.response.IdResponse;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.service.MemberService;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.sportvoucher.service.SportVoucherService;
import com.tuk.sportify.vouchermember.service.VoucherMemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CrewService {

    private final CrewRepository crewRepository;
    private final VoucherMemberService voucherMemberService;
    private final SportVoucherService sportVoucherService;
    private final MemberService memberService;
    private final CrewMapper crewMapper;

    public IdResponse createCrew(
            final Long memberId, final Long sportVoucherId, final CreateCrewRequest request) {
        final Member member = memberService.getMemberById(memberId);
        final SportVoucher sportVoucher = sportVoucherService.getSportVoucherById(sportVoucherId);
        final Crew crew = crewMapper.toCrew(member, sportVoucher, request);
        crewRepository.save(crew);
        voucherMemberService.participate(crew, sportVoucher);
        return new IdResponse(crew.getId());
    }

    public Crew getCrew(final Long crewId) {
        return crewRepository
                .findById(crewId)
                .orElseThrow(() -> new CrewNotFoundExceptionException(ErrorCode.CREW_NOT_FOUND));
    }
}
