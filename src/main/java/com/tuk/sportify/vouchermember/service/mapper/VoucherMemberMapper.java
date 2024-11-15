package com.tuk.sportify.vouchermember.service.mapper;

import com.tuk.sportify.sportvoucher.domain.Course;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.vouchermember.domain.VoucherMember;
import com.tuk.sportify.vouchermember.dto.CrewVoucher;
import com.tuk.sportify.vouchermember.dto.PersonalVoucher;
import com.tuk.sportify.vouchermember.dto.PersonalAndCrewVoucherResponse;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Component;

@Component
public class VoucherMemberMapper {

    public List<PersonalVoucher> toPersonalVoucher(final List<SportVoucher> sportVouchers) {
        return sportVouchers.stream()
                .map(SportVoucher::getCourse)
                .map(c -> new PersonalVoucher(c.getName(), c.getDuration()))
                .toList();
    }

    public List<CrewVoucher> toCrewVoucher(final List<VoucherMember> voucherMembers) {
        return voucherMembers.stream()
                .map(vm -> new CrewVoucher(vm.getSportVoucherName(), vm.crewName()))
                .toList();
    }
}
