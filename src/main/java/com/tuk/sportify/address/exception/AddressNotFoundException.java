package com.tuk.sportify.address.exception;

import com.tuk.sportify.global.exception.ResourceNotFoundException;
import com.tuk.sportify.global.status_code.ErrorCode;

public class AddressNotFoundException extends ResourceNotFoundException {

    public AddressNotFoundException(final ErrorCode errorCode) {
        super(errorCode);
    }
}
