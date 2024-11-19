package com.tuk.sportify.global.response;

import com.tuk.sportify.global.status_code.ErrorCode;

public record ErrorResponse(
        int httpStatusCode, String httpStatusMessage, String serverErrorCode,
        String serverErrorMessage) {

    public ErrorResponse(final ErrorCode errorCode) {
        this(
                errorCode.getHttpStatus().value(),
                errorCode.getHttpStatus().getReasonPhrase(),
                errorCode.getCode(),
                errorCode.getMsg());
    }
}
