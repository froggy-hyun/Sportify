package com.tuk.sportify.global.exception;

import com.tuk.sportify.global.error.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
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
