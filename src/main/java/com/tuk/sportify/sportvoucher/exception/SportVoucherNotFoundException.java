package com.tuk.sportify.sportvoucher.exception;

import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.global.exception.ResourceNotFoundException;

public class SportVoucherNotFoundException extends ResourceNotFoundException {

    public SportVoucherNotFoundException(final ErrorCode errorCode) {
        super(errorCode);
    }
}
