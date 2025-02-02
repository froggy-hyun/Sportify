package com.tuk.sportify.vouchermember.service;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.crew.repository.CrewRepository;
import com.tuk.sportify.crewapplicant.exception.DuplicatedParticipationException;
import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.global.utils.SportifyDateFormatter;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.service.MemberService;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.vouchermember.domain.VoucherMember;
import com.tuk.sportify.vouchermember.dto.CrewMembersResponse;
import com.tuk.sportify.vouchermember.dto.CrewVoucher;
import com.tuk.sportify.vouchermember.dto.MyCurrentCrewResponse;
import com.tuk.sportify.vouchermember.dto.MyPastCrewResponse;
import com.tuk.sportify.vouchermember.dto.PastPersonalVoucherResponse;
import com.tuk.sportify.vouchermember.dto.PersonalAndCrewVoucherResponse;
import com.tuk.sportify.vouchermember.dto.PersonalVoucher;
import com.tuk.sportify.vouchermember.exception.VoucherMemberNotFound;
import com.tuk.sportify.vouchermember.repository.VoucherMemberRepository;
import com.tuk.sportify.vouchermember.service.mapper.VoucherMemberMapper;

import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
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
    private final CrewRepository crewRepository;

    public PersonalAndCrewVoucherResponse findPersonalAndCrewVouchers(final Long memberId) {
        final Member member = getMember(memberId);
        final Integer currentDate = SportifyDateFormatter.getCurrentDate();
        return new PersonalAndCrewVoucherResponse(
                findCurrentPersonalVouchers(member, currentDate),
                findCrewVouchers(member, currentDate));
    }

    public MyCurrentCrewResponse findMyCurrentCrews(final Long memberId) {
        final Member member = getMember(memberId);
        final Integer currentDate = SportifyDateFormatter.getCurrentDate();
        List<VoucherMember> myCrews =
                voucherMemberRepository.findCurrentCrewsByMember(member, currentDate);
        return voucherMemberMapper.toMyCurrentCrewResponse(myCrews);
    }

    public MyPastCrewResponse findMyPastCrews(
            final Long memberId, final Integer page, final Integer fetchSize) {
        final Member member = getMember(memberId);
        final Integer currentDate = SportifyDateFormatter.getCurrentDate();
        final PageRequest pageRequest = PageRequest.of(page, fetchSize);
        Slice<VoucherMember> voucherMemberSlice = voucherMemberRepository.findPastCrewsByMemberJoinFetch(
            member,currentDate, pageRequest);
        return voucherMemberMapper.toMyPastCrewResponse(voucherMemberSlice);
    }

    private Member getMember(final Long memberId) {
        return memberService.getMemberById(memberId);
    }

    private List<CrewVoucher> findCrewVouchers(final Member member, final Integer currentDate) {
        final List<VoucherMember> voucherMember =
                voucherMemberRepository.findByMemberJoinFetch(member, currentDate);
        return voucherMemberMapper.toCrewVoucher(voucherMember);
    }

    public PastPersonalVoucherResponse findPastPersonalVouchers(
            final Long memberId, final Integer page, final Integer fetchSize) {
        final Member member = getMember(memberId);
        final Integer currentDate = SportifyDateFormatter.getCurrentDate();
        final PageRequest pageRequest = PageRequest.of(page, fetchSize);
        final Slice<VoucherMember> voucherMemberSlice =
                voucherMemberRepository.findPastSportVoucherByMemberJoinFetch(
                        member, currentDate, pageRequest);
        return voucherMemberMapper.toPastPersonalVoucherResponse(voucherMemberSlice);
    }

    private List<PersonalVoucher> findCurrentPersonalVouchers(
            final Member member, final Integer currentDate) {
        final List<VoucherMember> sportVouchers =
                voucherMemberRepository.findSportVoucherByMemberJoinFetch(member, currentDate);
        return voucherMemberMapper.toPersonalVoucher(sportVouchers);
    }

    @Transactional
    public void participate(final Crew crew, final SportVoucher sportVoucher) {
        final VoucherMember voucherMember = new VoucherMember(crew.getHost(), sportVoucher, crew);
        voucherMemberRepository.save(voucherMember);
    }

    @Transactional
    public void participate(final VoucherMember voucherMember) {
        validateDuplication(voucherMember);
        voucherMemberRepository.save(voucherMember);
    }

    private void validateDuplication(final VoucherMember voucherMember) {
        if(voucherMemberRepository.existsByMemberAndCrew(voucherMember.getMember(),
            voucherMember.getCrew())){
            throw new DuplicatedParticipationException(ErrorCode.DUPLICATED_PARTICIPATION);
        }
    }

    public CrewMembersResponse findCrewMembers(final Long crewId){
        List<VoucherMember> crewMembers = voucherMemberRepository.findByCrewId(crewId);
        return voucherMemberMapper.toCrewMembersResponse(crewMembers);
    }

    @Transactional
    public void delete(final Long memberId, final Long crewId){
        VoucherMember voucherMember = voucherMemberRepository.findByMemberAndCrew(memberId, crewId)
            .orElseThrow(() -> new VoucherMemberNotFound(ErrorCode.VOUCHER_MEMBER_NOT_FOUND));
        if(voucherMember.isLastMember()){
            crewRepository.delete(voucherMember.getCrew());
        }else{
            final Crew crew = voucherMember.getCrew();
            crew.exit();
        }
        voucherMemberRepository.delete(voucherMember);
    }
}
