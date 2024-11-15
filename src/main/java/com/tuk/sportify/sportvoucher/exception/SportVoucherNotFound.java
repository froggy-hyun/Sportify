package com.tuk.sportify.sportvoucher.exception;

import com.tuk.sportify.global.error.ErrorCode;
import com.tuk.sportify.global.exception.ResourceNotFound;

public class SportVoucherNotFound extends ResourceNotFound {

    public SportVoucherNotFound(final ErrorCode errorCode) {
        super(errorCode);
    }
}
