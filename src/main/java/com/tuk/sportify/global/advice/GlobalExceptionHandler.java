package com.tuk.sportify.global.advice;

import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.global.exception.*;
import com.tuk.sportify.global.response.ErrorResponse;

import com.tuk.sportify.member.exception.RegisterDtoValidationException;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

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

    @ExceptionHandler(DtoValidationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleDtoValidationException(final DtoValidationException e) {
        loggingError(e.getErrorCode());
        return new ErrorResponse(e.getErrorCode());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        Map<String, String> errors = new HashMap<>();
        e.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((org.springframework.validation.FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });

        // 상세 메시지 생성
        String detailedMessage = errors.entrySet().stream()
                .map(entry -> entry.getKey() + ": " + entry.getValue())
                .reduce((msg1, msg2) -> msg1 + ", " + msg2)
                .orElse("Validation failed");

        String combinedMessage = ErrorCode.MEMBER_REGISTER_ETC_POLICY_VIOLATION.getMsg() + " | Details: " + detailedMessage;

        // RegisterDtoValidationException으로 예외 전환
        RegisterDtoValidationException exception = new RegisterDtoValidationException(
                e.getParameter(),
                e.getBindingResult(),
                ErrorCode.MEMBER_REGISTER_ETC_POLICY_VIOLATION
        );

        // 로그 출력
        log.error("Validation exception: {}, Detailed errors: {}", exception.getErrorCode().getMsg(), combinedMessage);
        
        return new ErrorResponse(exception.getErrorCode().getHttpStatus().value(),
                exception.getErrorCode().getHttpStatus().getReasonPhrase(),
                exception.getErrorCode().getCode(),
                combinedMessage);
    }

    @ExceptionHandler(InvalidFieldFormatException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleInvalidFieldFormatException(InvalidFieldFormatException e) {
        loggingError(e.getErrorCode());
        return new ErrorResponse(e.getErrorCode());
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ErrorResponse handleHttpMessageNotReadableException(HttpMessageNotReadableException e) {
        
        String baseMessage = ErrorCode.MEMBER_REGISTER_ETC_POLICY_VIOLATION.getMsg();

        // 상세 메시지 생성
        String detailedMessage = e.getCause() != null ? e.getCause().getMessage() : "원인을 확인할 수 없습니다.";

        // 최종 메시지 조합
        String combinedMessage = baseMessage + " | Details: " + detailedMessage;

        // InvalidFieldFormatException으로 예외 전환
        InvalidFieldFormatException exception = new InvalidFieldFormatException(
                combinedMessage,
                e,
                ErrorCode.MEMBER_REGISTER_ETC_POLICY_VIOLATION
        );

        // 로그 출력
        log.error("InvalidFieldFormatException 발생: {}", combinedMessage);

        return new ErrorResponse(
                exception.getErrorCode().getHttpStatus().value(),
                exception.getErrorCode().getHttpStatus().getReasonPhrase(),
                exception.getErrorCode().getCode(),
                combinedMessage
        );
    }

    @ExceptionHandler(AuthException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleRegisterFailedException(final AuthException e) {
        loggingError(e.getErrorCode());
        return new ErrorResponse(e.getErrorCode());
    }

    private void loggingError(final ErrorCode errorCode){
        log.error("ErrorCode : {} , Message : {}",errorCode.getCode(),errorCode.getMsg());
    }
}
