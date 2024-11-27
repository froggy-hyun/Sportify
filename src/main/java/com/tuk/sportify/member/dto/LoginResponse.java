package com.tuk.sportify.member.dto;

import com.tuk.sportify.address.dto.AddressResponse;
import com.tuk.sportify.member.jwt.token.dto.TokenInfo;

public record LoginResponse(
    TokenInfo tokenInfo,
    AddressResponse address
) {}
