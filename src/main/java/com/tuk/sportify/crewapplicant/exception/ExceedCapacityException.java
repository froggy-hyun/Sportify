package com.tuk.sportify.crewapplicant.exception;

import com.tuk.sportify.global.exception.ValidationException;
import com.tuk.sportify.global.status_code.ErrorCode;

public class ExceedCapacityException extends ValidationException {

    public ExceedCapacityException(final ErrorCode errorCode) {
        super(errorCode);
    }
}
