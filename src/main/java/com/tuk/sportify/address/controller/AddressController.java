package com.tuk.sportify.address.controller;

import com.tuk.sportify.address.dto.AddressListResponse;
import com.tuk.sportify.address.dto.AddressRegisterRequest;
import com.tuk.sportify.address.dto.AddressRegisterResponse;
import com.tuk.sportify.address.dto.AddressResponse;
import com.tuk.sportify.address.dto.ChangedAddressResponse;
import com.tuk.sportify.address.service.AddressService;
import com.tuk.sportify.global.argumentresolver.AuthenticationMember;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/addresses")
@Tag(name = "주소지 설정")
public class AddressController {

    private final AddressService addressService;

    @PostMapping
    @Operation(summary = "주소지 등록", description = "새로운 주소를 등록합니다.")
    public AddressRegisterResponse register(
            @AuthenticationMember @Parameter(hidden = true) Long memberId,
            @RequestBody final AddressRegisterRequest request) {
        return addressService.register(request, memberId);
    }

    @GetMapping
    @Operation(summary = "주소지 목록", description = "등록한 주소 목록을 반환합니다.")
    public AddressListResponse findAddresses(@AuthenticationMember @Parameter(hidden = true) Long memberId) {
        return addressService.findAddresses(memberId);
    }

    @PatchMapping("/{addressId}")
    @Operation(summary = "주소지 선택(변경)", description = "설정한 주소지 중 한 가지를 선택(변경)합니다. ex) 내 집 -> 회사")
    public ChangedAddressResponse changeAddress(@AuthenticationMember @Parameter(hidden = true) Long memberId,
        @PathVariable final Long addressId ){
        return addressService.changeMemberAddress(memberId,addressId);
    }
}
