package com.tuk.sportify.global.exception;

import com.tuk.sportify.global.status_code.ErrorCode;
import lombok.Getter;

@Getter
public class ExternalServerException extends RuntimeException {
    private final ErrorCode errorCode;

    public ExternalServerException(ErrorCode errorCode) {this.errorCode = errorCode;}
}
