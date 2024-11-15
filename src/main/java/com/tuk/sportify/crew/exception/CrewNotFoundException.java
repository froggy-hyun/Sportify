package com.tuk.sportify.crew.exception;

import com.tuk.sportify.global.error.ErrorCode;
import com.tuk.sportify.global.exception.ResourceNotFound;

public class CrewNotFoundException extends ResourceNotFound {

    public CrewNotFoundException(final ErrorCode errorCode) {
        super(errorCode);
    }
}
