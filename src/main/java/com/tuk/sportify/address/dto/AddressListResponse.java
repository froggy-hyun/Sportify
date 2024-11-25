package com.tuk.sportify.address.dto;

import java.util.List;

public record AddressListResponse(
    List<AddressResponse> addresses
) {
}
