package com.tuk.sportify.member.jwt;

import com.tuk.sportify.global.status_code.SuccessCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.http.HttpStatus;

@Getter
@ToString
@NoArgsConstructor
public class ApiResponseJson {
    public HttpStatus httpStatus;
    public int code;
    public Object data;

    public ApiResponseJson(HttpStatus httpStatus, int code, Object data) { //에러 발생 시
        this.httpStatus = httpStatus;
        this.code = code;
        this.data = data;
    }

    public ApiResponseJson(HttpStatus httpStatus, Object data) { //성공 시
        this.httpStatus = httpStatus;
        this.code = Integer.parseInt(SuccessCode.JWT_OK.getCode());
        this.data = data;
    }

}