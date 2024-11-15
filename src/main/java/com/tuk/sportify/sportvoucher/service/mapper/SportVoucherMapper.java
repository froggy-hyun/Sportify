package com.tuk.sportify.sportvoucher.service.mapper;

import com.tuk.sportify.sportvoucher.domain.Course;
import com.tuk.sportify.sportvoucher.domain.Facility;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.sportvoucher.dto.VoucherResponse;
import java.util.List;
import org.springframework.stereotype.Component;

@Component
public class SportVoucherMapper {

    public List<VoucherResponse> toVouchersResponse(final List<SportVoucher> sportVouchers) {
        return sportVouchers.stream().map(this::toVoucherResponse).toList();
    }

    public VoucherResponse toVoucherResponse(final SportVoucher sportVoucher) {
        Course course = sportVoucher.getCourse();
        Facility facility = sportVoucher.getFacility();
        return new VoucherResponse(
                sportVoucher.getId(),
                course.getName(),
                facility.getDetailAddress(),
                course.getDuration());
    }
}
