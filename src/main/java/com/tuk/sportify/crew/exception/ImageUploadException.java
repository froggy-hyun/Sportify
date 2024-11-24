package com.tuk.sportify.crew.exception;

import com.tuk.sportify.global.exception.ExternalServerException;
import com.tuk.sportify.global.status_code.ErrorCode;

public class ImageUploadException extends ExternalServerException {

    public ImageUploadException(final ErrorCode errorCode) {
        super(errorCode);
    }
}
