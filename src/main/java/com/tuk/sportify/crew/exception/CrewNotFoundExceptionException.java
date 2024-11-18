package com.tuk.sportify.crew.exception;

import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.global.exception.ResourceNotFoundException;

public class CrewNotFoundExceptionException extends ResourceNotFoundException {

    public CrewNotFoundExceptionException(final ErrorCode errorCode) {
        super(errorCode);
    }
}
