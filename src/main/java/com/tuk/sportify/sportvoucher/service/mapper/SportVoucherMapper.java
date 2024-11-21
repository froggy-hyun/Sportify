package com.tuk.sportify.sportvoucher.service.mapper;

import com.tuk.sportify.sportvoucher.domain.Course;
import com.tuk.sportify.sportvoucher.domain.Facility;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.sportvoucher.dto.VoucherResponse;
import com.tuk.sportify.sportvoucher.dto.VoucherSearchResponse;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.stereotype.Component;

@Component
public class SportVoucherMapper {

    public List<VoucherResponse> toVouchersResponse(final List<SportVoucher> sportVouchers) {
        return sportVouchers.stream().map(this::toVoucherResponse).toList();
    }

    public VoucherSearchResponse toVoucherSearchResponse(final List<SportVoucher> sportVouchers){
        final List<VoucherResponse> voucherResponses = sportVouchers.stream().map(this::toVoucherResponse).toList();
        final Map<String, List<VoucherResponse>> groupedVoucherResponses = voucherResponses.stream()
            .collect(Collectors.groupingBy(VoucherResponse::subCategory));
        return new VoucherSearchResponse(groupedVoucherResponses);
    }

    public VoucherResponse toVoucherResponse(final SportVoucher sportVoucher) {
        Course course = sportVoucher.getCourse();
        Facility facility = sportVoucher.getFacility();
        return new VoucherResponse(
                sportVoucher.getId(),
                course.getName(),
                sportVoucher.getSubCategory(),
                facility.getBasicAddress(),
                course.getDuration());
    }
}
