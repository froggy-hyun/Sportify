package com.tuk.sportify.address.dto;

import org.springframework.util.MultiValueMap;

public record DefaultRequestParams(MultiValueMap<String, String> params) {}
