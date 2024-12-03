package com.tuk.sportify.crew.exception;

import com.tuk.sportify.global.exception.ValidationException;
import com.tuk.sportify.global.status_code.ErrorCode;

public class DuplicatedCrewCreationException extends ValidationException {

    public DuplicatedCrewCreationException(final ErrorCode errorCode) {
        super(errorCode);
    }
}
