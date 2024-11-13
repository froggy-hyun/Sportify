package com.tuk.sportify.member.service.mapper;

import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.domain.Role;
import com.tuk.sportify.member.dto.CreateMemberRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class MemberMapper {
    // CreateMemberRequest를 Member로 변환
    public Member CreateMemberRequestToMember(CreateMemberRequest createMemberRequest, PasswordEncoder passwordEncoder) {
        return Member.builder()
                .email(createMemberRequest.getEmail())
                .password(passwordEncoder.encode(createMemberRequest.getPassword())) // 비밀번호 암호화
                .name(createMemberRequest.getName())
                .gender(createMemberRequest.getGender())
                .age(createMemberRequest.getAge())
                .phone(createMemberRequest.getPhone())
                .address(createMemberRequest.getAddress())
                .disabled(createMemberRequest.isDisabled())
                .role(Role.ROLE_USER) // 기본 사용자 역할 설정
                .build();
    }
}
