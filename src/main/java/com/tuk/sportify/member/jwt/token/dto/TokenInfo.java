package com.tuk.sportify.member.jwt.token.dto;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.util.Date;

@Data
@ToString
public class TokenInfo {
    private String accessToken;
    private Date accessTokenExpireTime; //만료 시간
    private String ownerEmail; //소유자의 이메일
    private String tokenId; //토큰 id

    @Builder
    public TokenInfo(String accessToken, Date accessTokenExpireTime, String ownerEmail, String tokenId) {
        this.accessToken = accessToken;
        this.accessTokenExpireTime = accessTokenExpireTime;
        this.ownerEmail = ownerEmail;
        this.tokenId = tokenId;
    }
}
