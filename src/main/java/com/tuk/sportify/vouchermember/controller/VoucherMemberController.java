package com.tuk.sportify.vouchermember.controller;

import com.tuk.sportify.global.argumentresolver.AuthenticationMember;
import com.tuk.sportify.vouchermember.dto.MyCurrentCrewResponse;
import com.tuk.sportify.vouchermember.dto.MyPastCrewResponse;
import com.tuk.sportify.vouchermember.dto.PastPersonalVoucherResponse;
import com.tuk.sportify.vouchermember.dto.PersonalAndCrewVoucherResponse;
import com.tuk.sportify.vouchermember.service.VoucherMemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/voucher-members")
public class VoucherMemberController {

    private final VoucherMemberService voucherMemberService;

    // 현재 활동중인 이용권 목록 (개인+크루)
    @GetMapping
    public PersonalAndCrewVoucherResponse findPersonalAndCrewVouchers(
        @AuthenticationMember final Long memberId, @RequestParam Integer personalVoucherFetchSize,
        @RequestParam Integer crewVoucherFetchSize
    ){
        System.out.println("memberId = " + memberId);
        return voucherMemberService.findPersonalAndCrewVouchers(memberId,personalVoucherFetchSize,
            crewVoucherFetchSize);
    }

    // 참여중인 크루 목록
    @GetMapping("/my-current-crews")
    public MyCurrentCrewResponse findMyCurrentCrews(@RequestParam final Long memberId){
        return voucherMemberService.findMyCurrentCrews(memberId);
    }

    // 과거 크루 이용 내역 리스트 : 페이징 O
    @GetMapping("/my-past-crews")
    public MyPastCrewResponse findMyPastCrews(@RequestParam final Long memberId,@RequestParam Integer page,
        @RequestParam Integer fetchSize){
        return voucherMemberService.findMyPastCrews(memberId,page,fetchSize);
    }

    // 과거 개인 이용권 내역 : 페이징 O
    @GetMapping("/my-past-voucher")
    public PastPersonalVoucherResponse findPastPersonalVouchers(
        final Long memberId, @RequestParam Integer page, @RequestParam Integer fetchSize){
        return voucherMemberService.findPastPersonalVouchers(memberId,page,fetchSize);
    }
}
