package com.tuk.sportify.global.exception;

import com.tuk.sportify.global.status_code.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class AuthException extends RuntimeException {

    private final ErrorCode errorCode;
}
