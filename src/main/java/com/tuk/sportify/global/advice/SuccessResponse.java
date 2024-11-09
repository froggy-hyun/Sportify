package com.tuk.sportify.global.advice;

import lombok.Builder;

@Builder
public record SuccessResponse<T>(String status, String path, T data) {}
