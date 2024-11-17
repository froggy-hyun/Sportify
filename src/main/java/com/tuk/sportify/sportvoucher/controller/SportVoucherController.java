package com.tuk.sportify.sportvoucher.controller;

import com.tuk.sportify.sportvoucher.dto.PopularVoucherResponse;
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

    @GetMapping
    public PopularVoucherResponse findPopularVoucher(
            @RequestParam final String city,
            @RequestParam final String gu,
            @RequestParam Integer popularVoucherFetchSize) {
        return sportVoucherService.findPopularVoucher(
                city, gu, popularVoucherFetchSize);
    }

    @GetMapping("/{sportVoucherId}")
    public void getSingleSportVoucher(@PathVariable final Long sportVoucherId){
        sportVoucherService.getSportVoucher(sportVoucherId);
    }
}
