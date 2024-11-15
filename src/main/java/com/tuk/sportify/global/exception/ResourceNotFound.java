package com.tuk.sportify.global.exception;

import com.tuk.sportify.global.error.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class ResourceNotFound extends RuntimeException {
    private final ErrorCode errorCode;
}
