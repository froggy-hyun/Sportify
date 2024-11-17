package com.tuk.sportify.global.advice;

import com.tuk.sportify.global.error.ErrorCode;
import com.tuk.sportify.global.exception.ResourceNotFoundException;
import com.tuk.sportify.global.exception.ValidationException;
import com.tuk.sportify.global.response.ErrorResponse;

import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse retryFailed(final ResourceNotFoundException e) {
        loggingError(e.getErrorCode());
        return new ErrorResponse(e.getErrorCode());
    }

    @ExceptionHandler(ValidationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse retryFailed(final ValidationException e) {
        loggingError(e.getErrorCode());
        return new ErrorResponse(e.getErrorCode());
    }
    
    private void loggingError(final ErrorCode errorCode){
        log.error("ErrorCode : {} , Message : {}",errorCode.getCode(),errorCode.getMsg());
    }
}
