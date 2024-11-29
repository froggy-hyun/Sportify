package com.tuk.sportify.sportvoucher.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Builder;

@Builder
public record VoucherResponse(
        @Schema(description = "이용권 Id") Long voucherId,
        @Schema(description = "이용권 강좌 이름") String voucherCourseName,
        @Schema(description = "이용권 세부 카테고리 ex: 태권도, 요가, 필라테스") String subCategory,
        @Schema(description = "이용권 주소") String address,
        @Schema(description = "이용권 기간") String duration,
        @Schema(description = "신청 인원수") Integer requestNumberOfPerson) {}
