package com.tuk.sportify.vouchermember.dto;

import java.util.List;

public record PastPersonalVoucherResponse(
    List<PersonalVoucher> pastPersonalVouchers
) {}
