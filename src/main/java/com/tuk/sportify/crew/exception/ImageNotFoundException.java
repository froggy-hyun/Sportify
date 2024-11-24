package com.tuk.sportify.crew.exception;

import com.tuk.sportify.global.exception.ResourceNotFoundException;
import com.tuk.sportify.global.status_code.ErrorCode;

public class ImageNotFoundException extends ResourceNotFoundException {

    public ImageNotFoundException(final ErrorCode errorCode) {
        super(errorCode);
    }
}
