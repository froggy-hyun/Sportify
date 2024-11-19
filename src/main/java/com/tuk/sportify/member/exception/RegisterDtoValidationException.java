package com.tuk.sportify.member.exception;

import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.global.exception.DtoValidationException;
import org.springframework.core.MethodParameter;
import org.springframework.validation.BindingResult;

public class RegisterDtoValidationException extends DtoValidationException {
    public RegisterDtoValidationException(MethodParameter parameter, BindingResult bindingResult, ErrorCode errorCode) {
        super(parameter, bindingResult, errorCode);
    }
}
