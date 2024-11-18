package com.tuk.sportify.global.exception;

import com.tuk.sportify.global.error.ErrorCode;
import lombok.Getter;
import org.springframework.http.converter.HttpMessageNotReadableException;

@Getter
public class InvalidFieldFormatException extends HttpMessageNotReadableException {
    private final ErrorCode errorCode;

    public InvalidFieldFormatException(String message, Throwable cause, ErrorCode errorCode) {
        super(message, cause);
        this.errorCode = errorCode;
    }
}
