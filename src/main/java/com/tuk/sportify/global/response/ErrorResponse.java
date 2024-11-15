package com.tuk.sportify.global.response;

import com.tuk.sportify.global.error.ErrorCode;

public record ErrorResponse(String status, String code, String message) {

    private static final String FAILURE = "failure";

    public ErrorResponse(final ErrorCode errorCode) {
        this(FAILURE, errorCode.getCode(), errorCode.getMsg());
    }
}
