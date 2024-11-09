package com.tuk.sportify.address.service.mapper;

import com.tuk.sportify.address.dto.AddressResponse;
import com.tuk.sportify.address.dto.VworldAddressResponse;

import org.springframework.stereotype.Component;

@Component
public class AddressConvertMapper {

    public AddressResponse toAddressResponse(final VworldAddressResponse response) {
        return new AddressResponse(
                response.response().result()[0].structure().level1(),
                response.response().result()[0].structure().level2());
    }
}
