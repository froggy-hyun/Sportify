package com.tuk.sportify.member.exception;

import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.global.exception.ResourceNotFoundException;

public class EmptyMemberListException extends ResourceNotFoundException {

    public EmptyMemberListException(final ErrorCode errorCode) {
        super(errorCode);
    }
}

