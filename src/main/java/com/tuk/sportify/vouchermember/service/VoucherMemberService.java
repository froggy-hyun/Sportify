package com.tuk.sportify.vouchermember.service;

import com.tuk.sportify.global.utils.SportifyDateFormatter;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.service.MemberService;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.vouchermember.domain.VoucherMember;
import com.tuk.sportify.vouchermember.dto.CrewVoucher;
import com.tuk.sportify.vouchermember.dto.MyCurrentCrewResponse;
import com.tuk.sportify.vouchermember.dto.MyPastCrewResponse;
import com.tuk.sportify.vouchermember.dto.PastPersonalVoucherResponse;
import com.tuk.sportify.vouchermember.dto.PersonalAndCrewVoucherResponse;
import com.tuk.sportify.vouchermember.dto.PersonalVoucher;
import com.tuk.sportify.vouchermember.repository.VoucherMemberRepository;
import com.tuk.sportify.vouchermember.service.mapper.VoucherMemberMapper;

import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Limit;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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
            final Long memberId,
            final Integer personalVoucherFetchSize,
            final Integer crewVoucherFetchSize) {
        final Member member = memberService.getMemberById(memberId).get();
        final Integer currentDate = SportifyDateFormatter.getCurrentDate();
        return new PersonalAndCrewVoucherResponse(
                findCurrentPersonalVouchers(member, personalVoucherFetchSize, currentDate),
                findCrewVouchers(member, crewVoucherFetchSize, currentDate));
    }

    public MyCurrentCrewResponse findMyCurrentCrews(final Long memberId) {
        final Member member = memberService.getMemberById(memberId).get();
        final Integer currentDate = SportifyDateFormatter.getCurrentDate();
        List<VoucherMember> myCrews =
                voucherMemberRepository.findCurrentCrewsByMember(member, currentDate);
        return voucherMemberMapper.toMyCurrentCrewResponse(myCrews);
    }

    public MyPastCrewResponse findMyPastCrews(final Long memberId, final Integer page,
        final Integer fetchSize) {
        final Member member = memberService.getMemberById(memberId).get();
        final Integer currentDate = SportifyDateFormatter.getCurrentDate();
        final PageRequest pageRequest = PageRequest.of(page, fetchSize, Sort.by("endAt"));
        List<VoucherMember> myCrews =
                voucherMemberRepository.findPastCrewsByMember(member, currentDate,pageRequest);
        return voucherMemberMapper.toMyPastCrewResponse(myCrews);
    }

    private List<CrewVoucher> findCrewVouchers(
            final Member member, final Integer fetchSize, final Integer currentDate) {
        final List<VoucherMember> voucherMember =
                voucherMemberRepository.findByMemberJoinFetch(
                        member, currentDate, Limit.of(fetchSize));
        return voucherMemberMapper.toCrewVoucher(voucherMember);
    }

    public PastPersonalVoucherResponse findPastPersonalVouchers(
            final Member member,final Integer page, final Integer fetchSize) {
        final Integer currentDate = SportifyDateFormatter.getCurrentDate();
        final PageRequest pageRequest = PageRequest.of(page, fetchSize, Sort.by("endAt"));
        final List<SportVoucher> sportVouchers =
                voucherMemberRepository.findPastSportVoucherByMemberJoinFetch(
                        member, currentDate,pageRequest);
        return new PastPersonalVoucherResponse(
                voucherMemberMapper.toCurrentPersonalVoucher(sportVouchers));
    }

    private List<PersonalVoucher> findCurrentPersonalVouchers(
            final Member member, final Integer fetchSize, final Integer currentDate) {
        final List<SportVoucher> sportVouchers =
                voucherMemberRepository.findSportVoucherByMemberJoinFetch(
                        member, currentDate, Limit.of(fetchSize));
        return voucherMemberMapper.toCurrentPersonalVoucher(sportVouchers);
    }
}
