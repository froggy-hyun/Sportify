package com.tuk.sportify.global.response;

import lombok.Builder;

@Builder
public record SuccessResponse<T>(int httpStatusCode, String httpStatusMessage, T data) {}
