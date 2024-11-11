package com.tuk.sportify.vouchermember.service;

import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.service.MemberService;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.vouchermember.domain.VoucherMember;
import com.tuk.sportify.vouchermember.dto.CrewVoucher;
import com.tuk.sportify.vouchermember.dto.PersonalVoucher;
import com.tuk.sportify.vouchermember.dto.PersonalAndCrewVoucherResponse;
import com.tuk.sportify.vouchermember.exception.VoucherMemberNotFound;
import com.tuk.sportify.vouchermember.repository.VoucherMemberRepository;
import com.tuk.sportify.vouchermember.service.mapper.VoucherMemberMapper;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class VoucherMemberService {

    private final VoucherMemberRepository voucherMemberRepository;
    private final VoucherMemberMapper voucherMemberMapper;
    private final MemberService memberService;

    public PersonalAndCrewVoucherResponse findPersonalAndCrewVouchers(
        final Long memberId, final Integer personalVoucherFetchSize,
        final Integer crewVoucherFetchSize){
        final Member member = memberService.getMemberById(memberId).get();
        findCrewVouchers(member,0,crewVoucherFetchSize);
        findPersonalVouchers(member,0,personalVoucherFetchSize);
        return new PersonalAndCrewVoucherResponse();
    }

    private List<CrewVoucher> findCrewVouchers(final Member member,final Integer page,
        final Integer fetchSize) {
        final PageRequest pageRequest = PageRequest.of(page,fetchSize);
        final Slice<VoucherMember> voucherMember = voucherMemberRepository.findByMemberJoinFetch(member,
            pageRequest);
        return voucherMemberMapper.toCurrentParticipatedCrew(voucherMember);
    }

    private List<PersonalVoucher> findPersonalVouchers(final Member member,final Integer page,
        final Integer fetchSize) {
        final PageRequest pageRequest = PageRequest.of(page, fetchSize);
        final Slice<SportVoucher> sportVouchers =
            voucherMemberRepository.findSportVoucherByMemberJoinFetch(
            member, pageRequest);
        return voucherMemberMapper.toCurrentUsingVoucher(sportVouchers);
    }
}
