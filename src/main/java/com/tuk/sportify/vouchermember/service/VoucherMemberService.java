package com.tuk.sportify.vouchermember.service;

import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.service.MemberService;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.vouchermember.domain.VoucherMember;
import com.tuk.sportify.vouchermember.dto.CrewVoucher;
import com.tuk.sportify.vouchermember.dto.PersonalAndCrewVoucherResponse;
import com.tuk.sportify.vouchermember.dto.PersonalVoucher;
import com.tuk.sportify.vouchermember.repository.VoucherMemberRepository;
import com.tuk.sportify.vouchermember.service.mapper.VoucherMemberMapper;

import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Limit;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

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
        return new PersonalAndCrewVoucherResponse(
            findPersonalVouchers(member,0,personalVoucherFetchSize),
            findCrewVouchers(member,0,crewVoucherFetchSize)
        );
    }

    private List<CrewVoucher> findCrewVouchers(final Member member,final Integer page,
        final Integer fetchSize) {
        final List<VoucherMember> voucherMember = voucherMemberRepository.findByMemberJoinFetch(member,
            Limit.of(fetchSize));
        return voucherMemberMapper.toCrewVoucher(voucherMember);
    }

    private List<PersonalVoucher> findPersonalVouchers(final Member member,final Integer page,
        final Integer fetchSize) {
        final List<SportVoucher> sportVouchers =
            voucherMemberRepository.findSportVoucherByMemberJoinFetch(
            member, Limit.of(fetchSize));
        return voucherMemberMapper.toPersonalVoucher(sportVouchers);
    }
}
