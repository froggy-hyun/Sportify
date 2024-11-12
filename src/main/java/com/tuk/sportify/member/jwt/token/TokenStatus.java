package com.tuk.sportify.member.jwt.token;

public enum TokenStatus {
    TOKEN_VALID("정상 토큰"),
    TOKEN_EXPIRED("토큰 만료"),
    TOKEN_IS_BLACKLIST("폐기된 토큰"),
    TOKEN_WRONG_SIGNATURE("잘못된 토큰"),
    TOKEN_HASH_NOT_SUPPORTED("지원하지 않는 형식의 토큰"),
    WRONG_AUTH_HEADER("[Bearer ]로 시작하는 토큰이 없음"),
    TOKEN_VALIDATION_TRY_FAILED("인증 실패");

    private final String message;

    TokenStatus(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
