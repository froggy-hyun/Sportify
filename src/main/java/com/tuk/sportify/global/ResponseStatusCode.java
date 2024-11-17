package com.tuk.sportify.global;

public enum ResponseStatusCode {

    OK(200, "Success"),
    URL_NOT_FOUND(404, "URL not found"),
    EMAIL_NOT_VERIFIED(410, "Email not verified"),
    WRONG_PARAMETER(420, "Wrong parameter"),
    LOGIN_FAILED(430, "Login failed"),
    SERVER_ERROR(500, "Server error"),
    TOKEN_EXPIRED(4011, "Token expired"),
    TOKEN_IS_BLACKLIST(4012, "Token is blacklisted"),
    TOKEN_WRONG_SIGNATURE(4013, "Token has wrong signature"),
    TOKEN_HASH_NOT_SUPPORTED(4014, "Token hash algorithm not supported"),
    NO_AUTH_HEADER(4015, "Authorization header is missing"),
    TOKEN_VALIDATION_TRY_FAILED(4016, "Token validation attempt failed");

    private final int code;
    private final String message;

    ResponseStatusCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

    // 코드로 Enum을 검색하는 유틸리티 메서드 추가
    public static ResponseStatusCode fromCode(int code) {
        for (ResponseStatusCode status : ResponseStatusCode.values()) {
            if (status.code == code) {
                return status;
            }
        }
        throw new IllegalArgumentException("Unknown code: " + code);
    }
}
