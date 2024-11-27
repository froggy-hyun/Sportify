package com.tuk.sportify.member.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class LoginMemberRequest {
    @Email
    @Schema(description = "이메일",example = "sportify1@naver.com")
    private String email;
    @NotEmpty
    @Schema(description = "비밀 번호",example = "qWerfas3123!3d")
    private String password;
}
