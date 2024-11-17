package com.tuk.sportify.member.exception;

import com.tuk.sportify.global.error.ErrorCode;
import lombok.Getter;

@Getter
public class RegisterFailedException extends RuntimeException{

    private final ErrorCode errorCode;

    public RegisterFailedException(final ErrorCode errorCode) {
        super(errorCode.getMsg()); // ErrorCode의 메시지를 예외 메시지로 설정
        this.errorCode = errorCode;   // ErrorCode를 저장
    }
}
