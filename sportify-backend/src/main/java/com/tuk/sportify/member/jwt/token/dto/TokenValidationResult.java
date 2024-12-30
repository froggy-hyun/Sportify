package com.tuk.sportify.member.jwt.token.dto;

import com.tuk.sportify.member.jwt.token.TokenStatus;
import com.tuk.sportify.member.jwt.token.TokenType;
import io.jsonwebtoken.Claims;
import lombok.*;

@Getter @Setter
@ToString
@Data
@AllArgsConstructor
public class TokenValidationResult {
    private TokenStatus tokenStatus;
    private TokenType tokenType;
    private String tokenId;
    private Claims claims;

    public String getEmail() {
        if (claims == null) {
            throw new IllegalStateException("Claim value is null");
        }
        return claims.getSubject(); //토큰 소유자 이메일 return
    }

    public boolean isValid() {
        return TokenStatus.TOKEN_VALID == this.tokenStatus; //tokenStauts가 정상 토큰이면 true return
    }
}
