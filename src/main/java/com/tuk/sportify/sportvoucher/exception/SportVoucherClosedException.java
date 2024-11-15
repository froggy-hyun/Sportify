package com.tuk.sportify.sportvoucher.exception;

import com.tuk.sportify.global.error.ErrorCode;
import com.tuk.sportify.global.exception.ValidationException;

public class SportVoucherClosedException extends ValidationException {

    public SportVoucherClosedException(final ErrorCode errorCode) {
        super(errorCode);
    }
}
