package com.tuk.sportify.vouchermember.service.mapper;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.sportvoucher.domain.Course;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.vouchermember.domain.VoucherMember;
import com.tuk.sportify.vouchermember.dto.CrewVoucher;
import com.tuk.sportify.vouchermember.dto.MyCrew;
import com.tuk.sportify.vouchermember.dto.MyCurrentCrewResponse;
import com.tuk.sportify.vouchermember.dto.PersonalVoucher;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class VoucherMemberMapper {

    public List<PersonalVoucher> toPersonalVoucher(final List<SportVoucher> sportVouchers) {
        return sportVouchers.stream()
                .map(this::createPersonalVoucher)
                .toList();
    }

    private PersonalVoucher createPersonalVoucher(final SportVoucher sportVoucher) {
        Course course = sportVoucher.getCourse();
        return new PersonalVoucher(
            sportVoucher.getId(), course.getName(), course.getDuration());
    }

    public List<CrewVoucher> toCrewVoucher(final List<VoucherMember> voucherMembers) {
        return voucherMembers.stream()
                .map(vm -> new CrewVoucher(vm.getSportVoucherName(), vm.crewName()))
                .toList();
    }

    public MyCurrentCrewResponse toMyCrewResponse(final List<VoucherMember> voucherMembers) {
        final List<MyCrew> myCrews = voucherMembers.stream().map(this::toMyCrew).toList();
        return new MyCurrentCrewResponse(myCrews);
    }

    private MyCrew toMyCrew(final VoucherMember voucherMember) {
        final Crew crew = voucherMember.getCrew();
        final Course course = voucherMember.getSportVoucher().getCourse();
        return new MyCrew(crew.getId(), crew.getName(), course.getName(), course.getDuration());
    }
}
