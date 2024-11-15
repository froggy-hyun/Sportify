package com.tuk.sportify.global.response;

public record ErrorResponse(String status, String code, String message) {

    private static final String FAILURE = "failure";

    public ErrorResponse(final String message) {
        this(FAILURE, null, message);
    }
}
