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
    CREW_NOT_FOUND(HttpStatus.BAD_REQUEST,"201","존재하지 않는 크루입니다.");

    private final HttpStatus httpStatus;
    private final String code;
    private final String msg;
}
