package com.tuk.sportify.member.exception;

import com.tuk.sportify.global.error.ErrorCode;
import com.tuk.sportify.global.exception.ValidationException;

public class RegisterFailedException extends ValidationException {

    public RegisterFailedException(final ErrorCode errorCode) {
        super(errorCode);
    }
}
