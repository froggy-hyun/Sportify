package com.tuk.sportify.vouchermember.service.mapper;

import com.tuk.sportify.sportvoucher.domain.Course;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.vouchermember.domain.VoucherMember;
import com.tuk.sportify.vouchermember.dto.CrewVoucher;
import com.tuk.sportify.vouchermember.dto.PersonalVoucher;
import com.tuk.sportify.vouchermember.dto.PersonalAndCrewVoucherResponse;
import java.util.List;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Component;

@Component
public class VoucherMemberMapper {

    public PersonalAndCrewVoucherResponse toPersonalAndCrewVoucherResponse(
        final Slice<SportVoucher> sportVouchers,final Slice<VoucherMember> voucherMember
    ){

    }

    public PersonalVoucher toPersonalVoucher(final SportVoucher sportVouchers){
        final Course course = sportVoucher.getCourse();
        return new PersonalVoucher(course.getName(), course.getDuration());
    }

    public CrewVoucher toCrewVoucher(final VoucherMember voucherMember){
        return new CrewVoucher();
    }
}
