package com.tuk.sportify.sportvoucher.exception;

import com.tuk.sportify.global.exception.ValidationException;
import com.tuk.sportify.global.status_code.ErrorCode;

public class InvalidPopularSportRequestException extends ValidationException {
    public InvalidPopularSportRequestException(final ErrorCode errorCode) {
        super(errorCode);
    }
}
