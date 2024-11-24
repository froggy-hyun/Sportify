package com.tuk.sportify.crewapplicant.exception;

import com.tuk.sportify.global.exception.ValidationException;
import com.tuk.sportify.global.status_code.ErrorCode;

public class InvalidGenderException extends ValidationException {

    public InvalidGenderException(final ErrorCode errorCode) {
        super(errorCode);
    }
}
