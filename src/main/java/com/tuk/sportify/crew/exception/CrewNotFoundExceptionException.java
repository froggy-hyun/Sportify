package com.tuk.sportify.crew.exception;

import com.tuk.sportify.global.error.ErrorCode;
import com.tuk.sportify.global.exception.ResourceNotFoundException;

public class CrewNotFoundExceptionException extends ResourceNotFoundException {

    public CrewNotFoundExceptionException(final ErrorCode errorCode) {
        super(errorCode);
    }
}
