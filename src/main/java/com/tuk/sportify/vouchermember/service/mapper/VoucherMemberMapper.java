package com.tuk.sportify.vouchermember.service.mapper;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.sportvoucher.domain.Course;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.vouchermember.domain.VoucherMember;
import com.tuk.sportify.vouchermember.dto.CrewMember;
import com.tuk.sportify.vouchermember.dto.CrewMembersResponse;
import com.tuk.sportify.vouchermember.dto.CrewVoucher;
import com.tuk.sportify.vouchermember.dto.MyCrew;
import com.tuk.sportify.vouchermember.dto.MyCurrentCrewResponse;
import com.tuk.sportify.vouchermember.dto.MyPastCrewResponse;
import com.tuk.sportify.vouchermember.dto.PastPersonalVoucherResponse;
import com.tuk.sportify.vouchermember.dto.PersonalVoucher;

import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Objects;

@Component
public class VoucherMemberMapper {

    public List<PersonalVoucher> toPersonalVoucher(final List<VoucherMember> voucherMembers) {
        return voucherMembers.stream().map(this::createPersonalVoucher).toList();
    }

    public CrewMembersResponse toCrewMembersResponse(final List<VoucherMember> voucherMembers) {
        List<CrewMember> crewMembers = voucherMembers.stream().map(this::toCrewMember).toList();
        return new CrewMembersResponse(crewMembers);
    }

    private CrewMember toCrewMember(final VoucherMember voucherMember) {
        final Member member = voucherMember.getMember();
        return new CrewMember(member.getId(), member.getName());
    }

    public PastPersonalVoucherResponse toPastPersonalVoucherResponse(
            Slice<VoucherMember> voucherMemberSlice) {
        return PastPersonalVoucherResponse.builder()
                .pastPersonalVouchers(toPersonalVoucher(voucherMemberSlice.getContent()))
                .requestFetchSize(voucherMemberSlice.getSize())
                .hasNextPage(voucherMemberSlice.hasNext())
                .numberOfElement(voucherMemberSlice.getNumberOfElements())
                .build();
    }

    private PersonalVoucher createPersonalVoucher(final VoucherMember voucherMember) {
        final SportVoucher sportVoucher = voucherMember.getSportVoucher();
        final Course course = sportVoucher.getCourse();
        return new PersonalVoucher(
                sportVoucher.getId(),
                course.getName(),
                course.getDuration(),
                voucherMember.getVoucherAddress());
    }

    public List<CrewVoucher> toCrewVoucher(final List<VoucherMember> voucherMembers) {
        return voucherMembers.stream()
                .map(
                        vm ->
                                new CrewVoucher(
                                        vm.getSportVoucher().getId(),
                                        vm.getSportVoucherName(),
                                        vm.crewName(),
                                        vm.getVoucherAddress(),
                                        vm.getSportVoucher().getCourse().getDuration()))
                .toList();
    }

    public MyCurrentCrewResponse toMyCurrentCrewResponse(final List<VoucherMember> voucherMembers) {
        final List<MyCrew> myCrews = voucherMembers.stream().map(this::toMyCrew).toList();
        return new MyCurrentCrewResponse(myCrews);
    }

    public MyPastCrewResponse toMyPastCrewResponse(final Slice<VoucherMember> voucherMembers) {
        List<VoucherMember> content = voucherMembers.getContent();
        final List<MyCrew> myCrews = content.stream().map(this::toMyCrew).toList();
        return MyPastCrewResponse.builder()
                .myPastCrews(myCrews)
                .requestFetchSize(voucherMembers.getSize())
                .hasNextPage(voucherMembers.hasNext())
                .numberOfElement(voucherMembers.getNumberOfElements())
                .build();
    }

    private MyCrew toMyCrew(final VoucherMember voucherMember) {
        final Crew crew = voucherMember.getCrew();
        return MyCrew.builder()
                .crewCapacity(crew.getCapacity())
                .crewId(crew.getId())
                .crewCapacity(crew.getCapacity())
                .difficultyLevel(crew.getDifficultyLevel().getDescription())
                .crewName(crew.getName())
                .genderRule(crew.getGenderRule().getDescription())
                .imageUrl(crew.getCrewImage())
                .build();
    }
}
