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

    public List<PersonalVoucher> toPersonalVoucher(final Slice<SportVoucher> sportVouchersSlice) {
        final List<SportVoucher> sportVouchers = sportVouchersSlice.getContent();
        return sportVouchers.stream()
                .map(SportVoucher::getCourse)
                .map(c -> new PersonalVoucher(c.getName(), c.getDuration()))
                .collect(Collectors.toList());
    }

    public List<CrewVoucher> toCrewVoucher(final Slice<VoucherMember> voucherMemberSlice) {
        final List<VoucherMember> voucherMembers = voucherMemberSlice.getContent();
        return voucherMembers.stream()
                .map(vm -> new CrewVoucher(vm.getSportVoucherName(), vm.crewName()))
                .collect(Collectors.toList());
    }
}
