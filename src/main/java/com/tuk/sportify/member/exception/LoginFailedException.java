package com.tuk.sportify.member.exception;

import com.tuk.sportify.global.error.ErrorCode;
import com.tuk.sportify.global.exception.AuthException;

public class LoginFailedException extends AuthException {

    public LoginFailedException(final ErrorCode errorCode) {
        super(errorCode);
    }

}

