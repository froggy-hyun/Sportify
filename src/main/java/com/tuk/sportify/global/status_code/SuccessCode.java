package com.tuk.sportify.global.status_code;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@RequiredArgsConstructor
@Getter
public enum SuccessCode {
    /**
     * Jwt : Jwt 관련 에러 코드
     */

    JWT_OK(HttpStatus.OK, "400", "OK");

    private final HttpStatus httpStatus;
    private final String code;
    private final String msg;

}
