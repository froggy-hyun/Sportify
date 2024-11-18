package com.tuk.sportify.member.exception;

import com.tuk.sportify.global.error.ErrorCode;
import com.tuk.sportify.global.exception.ResourceNotFoundException;

public class MemberNotFoundException extends ResourceNotFoundException {

    public MemberNotFoundException(final ErrorCode errorCode) {
        super(errorCode);
    }
}
