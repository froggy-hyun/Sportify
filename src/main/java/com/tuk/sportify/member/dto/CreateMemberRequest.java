package com.tuk.sportify.member.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
//import lombok.AccessLevel;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

//@Data
//@AllArgsConstructor
//@NoArgsConstructor(access = AccessLevel.PROTECTED)
public record CreateMemberRequest (

    @NotBlank(message = "이메일은 필수 입력 값입니다.")
    @Email(message = "이메일 형식으로 입력해주세요.")
    String email, // 이메일

    @NotBlank(message = "비밀번호는 필수 입력 값입니다.")
    @Length(min = 6, max = 16, message = "비밀번호는 6자 이상, 16자 이하로 입력해주세요.")
    String password,

//    @NotBlank(message = "비밀번호 확인은 필수 입력 값입니다.")
//    @Length(min = 6, max = 16, message = "비밀번호는 6자 이상, 16자 이하로 입력해주세요.")
//    private String password_confirm;

    @NotBlank(message = "이름은 필수 입력 값입니다.")
    @Pattern(regexp = "^[ㄱ-ㅎ가-힣a-z0-9-_]{3,10}$", message = "이름은 특수문자 제외 3자이상 10자이하로 입력해주세요.")
    String name,

    @NotBlank(message = "성별은 필수 입력 값입니다.")
    String gender,

    @NotNull(message = "나이는 필수 입력 값입니다.")
    int age,

    @Pattern(regexp = "^^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$", message = "휴대폰 번호 양식이 아닙니다.(xxx-xxxx-xxxx)")
    @NotBlank(message = "전화번호는 필수 입력 값입니다.")
    String phone,

    @NotBlank(message = "주소는 필수 입력 값입니다.")
    String address,

    //장애인 비장애인 여부
    @NotNull(message = "장애인 비장애인 여부는 필수 입력 값입니다.")
    boolean disabled

) {}
