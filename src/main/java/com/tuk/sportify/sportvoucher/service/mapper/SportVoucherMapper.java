package com.tuk.sportify.sportvoucher.service.mapper;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.sportvoucher.domain.Course;
import com.tuk.sportify.sportvoucher.domain.Facility;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.sportvoucher.dto.CrewResponse;
import com.tuk.sportify.sportvoucher.dto.VoucherDetailResponse;
import com.tuk.sportify.sportvoucher.dto.VoucherResponse;
import com.tuk.sportify.sportvoucher.dto.VoucherSearchResponse;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SportVoucherMapper {

    public List<VoucherResponse> toVouchersResponse(final List<SportVoucher> sportVouchers) {
        return sportVouchers.stream().map(this::toVoucherResponse).toList();
    }

    public VoucherSearchResponse toVoucherSearchResponse(final List<SportVoucher> sportVouchers) {
        final List<VoucherResponse> voucherResponses =
                sportVouchers.stream().map(this::toVoucherResponse).toList();
        return new VoucherSearchResponse(voucherResponses);
    }

    public VoucherResponse toVoucherResponse(final SportVoucher sportVoucher) {
        Course course = sportVoucher.getCourse();
        Facility facility = sportVoucher.getFacility();
        return VoucherResponse.builder()
                .voucherId(sportVoucher.getId())
                .voucherCourseName(course.getName())
                .address(facility.getBasicAddress())
                .duration(course.getDuration())
                .subCategory(sportVoucher.getMiddleCategory().getName())
                .requestNumberOfPerson(sportVoucher.getCourse().getRequestNumberOfPerson())
                .price(sportVoucher.getCourse().getPrice())
                .build();
    }

    public VoucherDetailResponse toVoucherDetailResponse(
            final SportVoucher sportVoucher, final List<Crew> crews) {
        Course course = sportVoucher.getCourse();
        Facility facility = sportVoucher.getFacility();

        return VoucherDetailResponse.builder()
                .voucherId(sportVoucher.getId())
                .voucherCourseName(course.getName())
                .crews(crews.stream().map(this::toCrewResponse).toList())
                .address(facility.getBasicAddress())
                .duration(course.getDuration())
                .subCategory(sportVoucher.getMiddleCategory().getName())
                .price(sportVoucher.getCourse().getPrice())
                .requestNumberOfPerson(sportVoucher.getCourse().getRequestNumberOfPerson())
                .build();
    }

    private CrewResponse toCrewResponse(final Crew crew) {
        return CrewResponse.builder()
                .crewId(crew.getId())
                .crewCapacity(crew.getCapacity())
                .crewName(crew.getName())
                .difficultyLevel(crew.getDifficultyLevel().getDescription())
                .genderRule(crew.getGenderRule().getDescription())
                .numberOfParticipants(crew.getNumberOfParticipants())
                .imageUrl(crew.getCrewImage().getImageUrl())
                .build();
    }
}
