package com.tuk.sportify.address.service;

import com.tuk.sportify.address.dto.AddressResponse;
import com.tuk.sportify.address.dto.VworldAddressResponse;
import com.tuk.sportify.address.infrastructure.VworldRestClient;

import com.tuk.sportify.address.dto.DefaultRequestParams;
import com.tuk.sportify.address.service.mapper.AddressConvertMapper;
import com.tuk.sportify.address.util.RequestParamCreator;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AddressConvertService {

    private final VworldRestClient vworldRestClient;
    private final DefaultRequestParams defaultRequestParams;
    private final AddressConvertMapper addressConvertMapper;

    public AddressResponse convertCoordinateToAddress(
            final String longitude, final String latitude) {
        final String point = RequestParamCreator.createPoint(longitude, latitude);
        VworldAddressResponse vworldAddressResponse =
                vworldRestClient.getAddressByCoordinate(point, defaultRequestParams.params());
        return addressConvertMapper.toAddressResponse(vworldAddressResponse);
    }
}
