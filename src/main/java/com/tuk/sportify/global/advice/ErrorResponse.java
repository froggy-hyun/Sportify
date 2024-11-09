package com.tuk.sportify.global.advice;

public record ErrorResponse(String status, String code, String message) {

    private static final String FAILURE = "failure";

    public ErrorResponse(final String message) {
        this(FAILURE, null, message);
    }
}
