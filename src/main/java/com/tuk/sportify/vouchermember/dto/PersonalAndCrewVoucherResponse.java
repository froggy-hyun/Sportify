package com.tuk.sportify.vouchermember.dto;

import java.util.List;

public record PersonalAndCrewVoucherResponse(
    List<PersonalVoucher> personalVouchers,
    List<CrewVoucher> crewVouchers
) {}
