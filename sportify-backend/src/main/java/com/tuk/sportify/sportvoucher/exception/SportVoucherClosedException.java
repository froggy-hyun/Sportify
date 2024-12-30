package com.tuk.sportify.sportvoucher.exception;

import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.global.exception.ValidationException;

public class SportVoucherClosedException extends ValidationException {

    public SportVoucherClosedException(final ErrorCode errorCode) {
        super(errorCode);
    }
}
