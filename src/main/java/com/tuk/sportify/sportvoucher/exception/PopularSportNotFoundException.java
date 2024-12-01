package com.tuk.sportify.sportvoucher.exception;

import com.tuk.sportify.global.exception.ResourceNotFoundException;
import com.tuk.sportify.global.status_code.ErrorCode;

public class PopularSportNotFoundException extends ResourceNotFoundException {
    public PopularSportNotFoundException(final ErrorCode errorCode) {
        super(errorCode);
    }
}
