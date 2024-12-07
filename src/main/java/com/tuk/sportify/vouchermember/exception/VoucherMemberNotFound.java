package com.tuk.sportify.vouchermember.exception;

import com.tuk.sportify.global.exception.ResourceNotFoundException;
import com.tuk.sportify.global.status_code.ErrorCode;

public class VoucherMemberNotFound extends ResourceNotFoundException {

    public VoucherMemberNotFound(final ErrorCode errorCode) {
        super(errorCode);
    }
}
