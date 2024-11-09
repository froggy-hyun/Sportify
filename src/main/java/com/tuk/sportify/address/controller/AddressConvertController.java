package com.tuk.sportify.address.controller;

import com.tuk.sportify.address.dto.AddressResponse;
import com.tuk.sportify.address.dto.VworldAddressResponse;
import com.tuk.sportify.address.service.AddressConvertService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/address")
public class AddressConvertController {

    private final AddressConvertService addressConvertService;

    @GetMapping
    public AddressResponse getConvertedAddress(
            @RequestParam String longitude,@RequestParam String latitude) {
        return addressConvertService.convertCoordinateToAddress(longitude,latitude);
    }
}
