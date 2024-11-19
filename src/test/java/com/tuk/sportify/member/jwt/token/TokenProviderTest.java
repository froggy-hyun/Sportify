package com.tuk.sportify.member.jwt.token;

import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.jwt.token.dto.TokenInfo;
import com.tuk.sportify.member.jwt.token.dto.TokenValidationResult;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

@Slf4j
@Transactional
class TokenProviderTest {

    // 512byte 이상 key 생성해야함
    private final String key = "dGhpcyBpcyBteSBoaWRkZW4gand0IGtleSBmb3IgdGVzdCwgcGxlYXNlIGdpdmUgbWUgand0IGtleSBoYWhhaGFoYWhh";
    private final Long accessTokenValidTimeInSeconds = 3L; //토큰 만료 시간 3초로 세팅
    private final TokenProvider tokenProvider = new TokenProvider(key, accessTokenValidTimeInSeconds);


    @Test
    void createToken() {
        Member member = getMember();
        TokenInfo token = tokenProvider.createToken(member);
        log.info("access token={}", token.getAccessToken());
    }

    @Test
    void validateTokenValid() {
        Member member = getMember();
        TokenInfo token = tokenProvider.createToken(member);
        String accessToken = token.getAccessToken();

        TokenValidationResult tokenValidationResult = tokenProvider.validateToken(accessToken);

        Assertions.assertThat(tokenValidationResult.isValid()).isTrue();

    }

    @Test
    void validateTokenInvalid() throws InterruptedException{
        Member member = getMember();
        TokenInfo token = tokenProvider.createToken(member);
        String accessToken = token.getAccessToken();

        //토큰 만료 시간이 3초이므로 그 이상 대기하여 만료 유도
        Thread.sleep(4000);
        TokenValidationResult tokenValidationResult = tokenProvider.validateToken(accessToken);

        Assertions.assertThat(tokenValidationResult.isValid()).isFalse();
    }

    private Member getMember() {
        return Member.builder()
                .email("test1@example.com")
                .password("password1")
                .name("Test Member1")
                .gender("male")
                .age(15)
                .phone("123-456-7890")
                .address("address1")
                .disabled(true)
                .build();
    }
}