package com.tuk.sportify.sportvoucher.controller;

import com.tuk.sportify.global.response.ApiErrorCodeExamples;
import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.sportvoucher.dto.PopularVoucherResponse;
import com.tuk.sportify.sportvoucher.dto.VoucherDetailResponse;
import com.tuk.sportify.sportvoucher.dto.VoucherSearchResponse;
import com.tuk.sportify.sportvoucher.service.SportVoucherService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/sport-voucher")
@Tag(name = "스포츠 이용권")
public class SportVoucherController {

    private final SportVoucherService sportVoucherService;

    // 인기 이용권 조회
    @GetMapping("/popularity")
    public PopularVoucherResponse findPopularVoucher(
            @RequestParam Integer fetchSize) {
        return sportVoucherService.findPopularVoucher(fetchSize);
    }

    // 이용권들 검색
    @GetMapping("/search")
    public VoucherSearchResponse searchVoucher(
            @RequestParam final Long middleCategoryId) {
        return sportVoucherService.searchVoucherByMiddleCategory(middleCategoryId);
    }

    // 이용권 단건 상세 조회
    @GetMapping("/{sportVoucherId}")
    @Operation(
            summary = "스포츠 이용권 단건 상세 조회",
            description = "스포츠 이용권 단건 조회와 해당 이용권에 생성된 모든 크루들을 반환합니다.")
    @ApiErrorCodeExamples({ErrorCode.SPORT_VOUCHER_NOT_FOUND, ErrorCode.SPORT_VOUCHER_CLOSED})
    public VoucherDetailResponse getSportVoucher(@PathVariable final Long sportVoucherId) {
        return sportVoucherService.getSportVoucher(sportVoucherId);
    }
}
