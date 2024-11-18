package com.tuk.sportify.member.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.member.jwt.token.TokenStatus;
import com.tuk.sportify.member.jwt.token.dto.TokenValidationResult;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;

import java.io.IOException;

import org.springframework.security.web.AuthenticationEntryPoint;
import java.util.Map;

@Slf4j
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
    private static final String VALIDATION_RESULT_KEY = "result";
    private static final String ERROR_MESSAGE_KEY = "errMsg";
    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {

        TokenValidationResult result = (TokenValidationResult) request.getAttribute(VALIDATION_RESULT_KEY);
        String errorMessage = result.getTokenStatus().getMessage();
        int errorCode;

        switch (result.getTokenStatus()) {
            case TOKEN_EXPIRED -> errorCode = Integer.parseInt(ErrorCode.JWT_TOKEN_EXPIRED.getCode());
            case TOKEN_IS_BLACKLIST -> errorCode = Integer.parseInt(ErrorCode.JWT_TOKEN_IS_BLACKLIST.getCode());
            case TOKEN_WRONG_SIGNATURE -> errorCode = Integer.parseInt(ErrorCode.JWT_TOKEN_WRONG_SIGNATURE.getCode());
            case TOKEN_HASH_NOT_SUPPORTED -> errorCode = Integer.parseInt(ErrorCode.JWT_TOKEN_HASH_NOT_SUPPORTED.getCode());
            case WRONG_AUTH_HEADER -> errorCode = Integer.parseInt(ErrorCode.JWT_NO_AUTH_HEADER.getCode());
            default -> {
                errorMessage = TokenStatus.TOKEN_VALIDATION_TRY_FAILED.getMessage();
                errorCode = Integer.parseInt(ErrorCode.JWT_TOKEN_VALIDATION_TRY_FAILED.getCode());
            }
        }

        sendError(response, errorMessage, errorCode);
    }

    private void sendError(HttpServletResponse response, String msg, int code) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        ApiResponseJson responseJson = new ApiResponseJson(HttpStatus.valueOf(HttpServletResponse.SC_UNAUTHORIZED), code, Map.of(ERROR_MESSAGE_KEY, msg)); // 응답할 데이터 생성
        String jsonToString = objectMapper.writeValueAsString(responseJson); // String으로 변환
        response.getWriter().write(jsonToString);
    }
}
