package com.tuk.sportify.sportvoucher.controller;

import com.tuk.sportify.sportvoucher.dto.PopularVoucherResponse;
import com.tuk.sportify.sportvoucher.dto.VoucherResponse;
import com.tuk.sportify.sportvoucher.service.SportVoucherService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/sport-voucher")
public class SportVoucherController {

    private final SportVoucherService sportVoucherService;

    // 인기 이용권 조회
    @GetMapping("/popularity")
    public PopularVoucherResponse findPopularVoucher(
            @RequestParam final String city,
            @RequestParam final String gu,
            @RequestParam Integer fetchSize) {
        return sportVoucherService.findPopularVoucher(
                city, gu, fetchSize);
    }

    // 이용권 단건 상세 조회 : TODO 추후 반환 데이터 수정 필요
    @GetMapping("/{sportVoucherId}")
    public VoucherResponse getSingleSportVoucher(@PathVariable final Long sportVoucherId){
        return sportVoucherService.getSingleSportVoucher(sportVoucherId);
    }
}
