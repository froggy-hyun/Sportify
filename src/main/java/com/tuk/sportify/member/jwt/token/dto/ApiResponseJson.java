package com.tuk.sportify.member.jwt.token.dto;

import com.tuk.sportify.member.jwt.ResponseStatusCode;
import org.springframework.http.HttpStatus;

public class ApiResponseJson {
    public HttpStatus httpStatus;
    public int code;
    public Object data;

    public ApiResponseJson(HttpStatus httpStatus, int code, Object data) { // 에러 발생 시
        this.httpStatus = httpStatus;
        this.code = code;
        this.data = data;
    }

    public ApiResponseJson(HttpStatus httpStatus, Object data) { // 성공 시
        this.httpStatus = httpStatus;
        this.code = ResponseStatusCode.OK;
        this.data = data;
    }
}
