package com.tuk.sportify.member.controller.advice;

import com.tuk.sportify.global.advice.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;


@Slf4j
@RestControllerAdvice
public class ExceptionAdvice {
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(RuntimeException.class)
    public ErrorResponse handleRuntimeException(RuntimeException e) {
        log.error("RuntimeException 발생: {}", e.getMessage(), e);
        return new ErrorResponse("failure", "500", "서버에 오류가 발생했습니다.");
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler({IllegalArgumentException.class, IllegalStateException.class})
    public ErrorResponse handleBadRequestException(Exception e) {
        log.error("BadRequestException 발생: {}", e.getMessage(), e);
        return new ErrorResponse("failure", "400", e.getMessage());
    }
}
