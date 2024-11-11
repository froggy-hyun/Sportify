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

    private SportVoucherService sportVoucherService;

    @GetMapping
    //TODO: 메서드 명 수정 고려 좀
    public void getSportVoucher(
        @RequestParam Integer popularVoucherSize,
        @RequestParam Integer newVoucherSize){
        sportVoucherService.getSportVouchers();
    }
}
