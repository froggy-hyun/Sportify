package com.tuk.sportify.address.infrastructure;

import com.tuk.sportify.address.dto.VworldAddressResponse;

import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.service.annotation.GetExchange;

public interface VworldRestClient {

    @GetExchange("https://api.vworld.kr/req/address")
    VworldAddressResponse getAddressByCoordinate(
        @RequestParam final String point,
        @RequestParam final MultiValueMap<String,String> defaultParameters);
}
