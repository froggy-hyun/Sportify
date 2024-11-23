package com.tuk.sportify.vouchermember.dto;

import java.util.List;
import lombok.Builder;

@Builder
public record PastPersonalVoucherResponse(
        boolean hasNextPage,
        int requestFetchSize,
        int numberOfElement,
        List<PersonalVoucher> pastPersonalVouchers) {}
