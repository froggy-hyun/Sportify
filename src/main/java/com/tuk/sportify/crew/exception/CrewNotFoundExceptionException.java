package com.tuk.sportify.crew.exception;

import com.tuk.sportify.global.exception.ResourceNotFoundException;
import com.tuk.sportify.global.status_code.ErrorCode;

public class CrewNotFoundExceptionException extends ResourceNotFoundException {

    public CrewNotFoundExceptionException(final ErrorCode errorCode) {
        super(errorCode);
    }
}
