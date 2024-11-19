package com.tuk.sportify.member.service.mapper;

import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.domain.Role;
import com.tuk.sportify.member.dto.CreateMemberRequest;
import com.tuk.sportify.member.dto.MemberInfoResponse;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class MemberMapper {
    // CreateMemberRequest를 Member로 변환
    public Member CreateMemberRequestToMember(CreateMemberRequest createMemberRequest, PasswordEncoder passwordEncoder) {
        return Member.builder()
                .email(createMemberRequest.email())
                .password(passwordEncoder.encode(createMemberRequest.password())) // 비밀번호 암호화
                .name(createMemberRequest.name())
                .gender(createMemberRequest.gender())
                .age(createMemberRequest.age())
                .phone(createMemberRequest.phone())
                .address(createMemberRequest.address())
                .disabled(createMemberRequest.disabled())
                .role(Role.ROLE_USER) // 기본 사용자 역할 설정
                .build();
    }

    public MemberInfoResponse MembertoMemberInfoResponse(Member member) {
        return MemberInfoResponse.builder()
                .id(member.getId())
                .email(member.getEmail())
                .name(member.getName())
                .age(member.getAge())
                .phone(member.getPhone())
                .address(member.getAddress())
                .disabled(member.isDisabled())
                .role(member.getRole())
                .build();
    }
}
