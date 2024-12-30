package com.tuk.sportify.vouchermember.dto;

import java.util.List;
import lombok.Builder;

@Builder
public record MyPastCrewResponse(
        boolean hasNextPage, int requestFetchSize, int numberOfElement, List<MyCrew> myPastCrews) {}
