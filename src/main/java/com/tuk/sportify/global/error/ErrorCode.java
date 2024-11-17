package com.tuk.sportify.global.error;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@RequiredArgsConstructor
@Getter
public enum ErrorCode {
    /**
     * Sport Voucher : 스포츠 이용권 관련 에러 코드
     */
    SPORT_VOUCHER_NOT_FOUND(HttpStatus.NOT_FOUND,"100","존재하지 않는 스포츠 이용권입니다."),
    SPORT_VOUCHER_CLOSED(HttpStatus.NOT_FOUND,"101","해당 이용권은 종료됐습니다."),

    /**
     * Crew : 크루 관련 에러 코드
     */
    CREW_NOT_FOUND(HttpStatus.BAD_REQUEST,"201","존재하지 않는 크루입니다."),

    /**
     * Member : 멤버 관련 에러 코드
     */
    MEMBER_EMAIL_NOT_VERIFIED(HttpStatus.BAD_REQUEST, "410", "Email not verified"),
    WRONG_PARAMETER(HttpStatus.BAD_REQUEST, "420", "Wrong parameter"),
    LOGIN_FAILED(HttpStatus.BAD_REQUEST, "430", "Login failed"),
    SERVER_ERROR(HttpStatus.BAD_REQUEST, "500", "Server error"),
    TOKEN_EXPIRED(HttpStatus.BAD_REQUEST, "4011", "Token expired"),
    TOKEN_IS_BLACKLIST(HttpStatus.BAD_REQUEST, "4012", "Token is blacklisted"),
    TOKEN_WRONG_SIGNATURE(HttpStatus.BAD_REQUEST, "4013", "Token has wrong signature"),
    TOKEN_HASH_NOT_SUPPORTED(HttpStatus.BAD_REQUEST, "4014", "Token hash algorithm not supported"),
    NO_AUTH_HEADER(HttpStatus.BAD_REQUEST, "4015", "Authorization header is missing"),
    TOKEN_VALIDATION_TRY_FAILED(HttpStatus.BAD_REQUEST, "4016", "Token validation attempt failed");

    private final HttpStatus httpStatus;
    private final String code;
    private final String msg;
}
