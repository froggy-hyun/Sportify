package com.tuk.sportify.crew.service;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.crew.domain.CrewImage;
import com.tuk.sportify.crew.dto.CreateCrewRequest;
import com.tuk.sportify.crew.dto.CreateCrewResponse;
import com.tuk.sportify.crew.dto.CrewDetailResponse;
import com.tuk.sportify.crew.exception.CrewNotFoundExceptionException;
import com.tuk.sportify.crew.repository.CrewRepository;
import com.tuk.sportify.crew.service.mapper.CrewMapper;
import com.tuk.sportify.facade.service.CrewVoucherFacadeService;
import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.service.MemberService;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.vouchermember.service.VoucherMemberService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CrewService {

    private final CrewRepository crewRepository;
    private final VoucherMemberService voucherMemberService;
    private final CrewVoucherFacadeService crewVoucherFacadeService;
    private final MemberService memberService;
    private final ImageService imageService;
    private final CrewMapper crewMapper;

    public CreateCrewResponse createCrew(
            final Long memberId, final Long sportVoucherId, final CreateCrewRequest request) {
        final Member member = memberService.getMemberById(memberId);
        final SportVoucher sportVoucher = crewVoucherFacadeService.getSportVoucherById(sportVoucherId);
        final CrewImage image = imageService.findImage(request.imageId());
        final Crew crew = crewMapper.toCrew(member, sportVoucher,image, request);
        crewRepository.save(crew);
        voucherMemberService.participate(crew, sportVoucher);
        return new CreateCrewResponse(crew.getId());
    }

    public Crew getCrew(final Long crewId) {
        return crewRepository
                .findByIdJoinFetch(crewId)
                .orElseThrow(() -> new CrewNotFoundExceptionException(ErrorCode.CREW_NOT_FOUND));
    }

    public CrewDetailResponse getCrewDetail(final Long crewId){
        final Crew crew = getCrew(crewId);
        return crewMapper.toCrewDetailResponse(crew);
    }
}
