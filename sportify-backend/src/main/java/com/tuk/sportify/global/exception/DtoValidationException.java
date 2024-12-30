package com.tuk.sportify.global.exception;

import com.tuk.sportify.global.status_code.ErrorCode;
import lombok.Getter;
import org.springframework.core.MethodParameter;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;

@Getter
public class DtoValidationException extends MethodArgumentNotValidException {

    private final ErrorCode errorCode;

    public DtoValidationException(MethodParameter parameter, BindingResult bindingResult, ErrorCode errorCode) {
        super(parameter, bindingResult);
        this.errorCode = errorCode;
    }
}
