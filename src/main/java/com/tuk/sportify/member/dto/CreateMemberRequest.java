package com.tuk.sportify.member.dto;

import com.tuk.sportify.member.domain.Gender;

import io.swagger.v3.oas.annotations.media.Schema;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
// import lombok.AccessLevel;
// import lombok.AllArgsConstructor;
// import lombok.Data;
// import lombok.NoArgsConstructor;

import org.hibernate.validator.constraints.Length;

// @Data
// @AllArgsConstructor
// @NoArgsConstructor(access = AccessLevel.PROTECTED)
public record CreateMemberRequest(
        @NotBlank(message = "이메일은 필수 입력 값입니다.")
                @Email(message = "이메일 형식으로 입력해주세요.")
                @Schema(description = "이메일", example = "sportify1@naver.com")
                String email, // 이메일
        @NotBlank(message = "비밀번호는 필수 입력 값입니다.")
                @Length(min = 6, max = 16, message = "비밀번호는 6자 이상, 16자 이하로 입력해주세요.")
                @Schema(description = "비밀 번호", example = "qWerfas3123!3d")
                String password,
        @NotBlank(message = "이름은 필수 입력 값입니다.")
                @Pattern(
                        regexp = "^[ㄱ-ㅎ가-힣a-z0-9-_]{3,10}$",
                        message = "이름은 특수문자 제외 3자이상 10자이하로 입력해주세요.")
                @Schema(description = "닉네임", example = "징징이")
                String name,
        @NotNull(message = "성별은 필수 입력 값입니다.")
                @Schema(description = "성별 [MALE, FEMALE, OTHER] 대문자를 준수해주세요.", example = "OTHER")
                Gender gender,
        @NotNull(message = "장애인 비장애인 여부는 필수 입력 값입니다.")
                @Schema(description = "장애 여부", example = "false")
                boolean disabled) {}
