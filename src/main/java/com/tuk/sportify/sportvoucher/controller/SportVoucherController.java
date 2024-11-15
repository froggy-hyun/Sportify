package com.tuk.sportify.sportvoucher.controller;

import com.tuk.sportify.sportvoucher.service.SportVoucherService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/sport-voucher")
public class SportVoucherController {

    private final SportVoucherService sportVoucherService;

    @GetMapping
    public void findPopularAndRecentVoucher(
            @RequestParam final String city,
            @RequestParam final String gu,
            @RequestParam Integer popularVoucherFetchSize,
            @RequestParam Integer recentVoucherFetchSize) {
        sportVoucherService.findPopularAndRecentVoucher(
                city, gu, popularVoucherFetchSize, recentVoucherFetchSize);
    }
}
