package com.tuk.sportify.vouchermember.controller;

import com.tuk.sportify.vouchermember.dto.PersonalAndCrewVoucherResponse;
import com.tuk.sportify.vouchermember.service.VoucherMemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/voucher-members")
public class VoucherMemberController {

    private final VoucherMemberService voucherMemberService;

    @GetMapping
    public PersonalAndCrewVoucherResponse findPersonalAndCrewVouchers(
        final Long memberId, @RequestParam Integer personalVoucherFetchSize,
        @RequestParam Integer crewVoucherFetchSize
    ){
        return voucherMemberService.findPersonalAndCrewVouchers(memberId,personalVoucherFetchSize,
            crewVoucherFetchSize);
    }


}
