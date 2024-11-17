package com.tuk.sportify.global.response;

import com.tuk.sportify.global.error.ErrorCode;

public record ErrorResponse(
        int httpStatusCode, String httpStatusMessage, String code, String serverMessage) {

    public ErrorResponse(final ErrorCode errorCode) {
        this(
                errorCode.getHttpStatus().value(),
                errorCode.getHttpStatus().getReasonPhrase(),
                errorCode.getCode(),
                errorCode.getMsg());
    }
}
