package com.tuk.sportify.member.service.mapper;

import com.tuk.sportify.address.domain.Address;
import com.tuk.sportify.global.utils.GeometryConverter;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.domain.Role;
import com.tuk.sportify.member.dto.CreateMemberRequest;
import com.tuk.sportify.member.dto.MemberInfoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MemberMapper {

    // CreateMemberRequest를 Member로 변환
    public Member CreateMemberRequestToMember(
            CreateMemberRequest createMemberRequest, PasswordEncoder passwordEncoder) {
        return Member.builder()
                .email(createMemberRequest.email())
                .password(passwordEncoder.encode(createMemberRequest.password())) // 비밀번호 암호화
                .name(createMemberRequest.name())
                .gender(createMemberRequest.gender())
                .disabled(createMemberRequest.disabled())
                .role(Role.ROLE_USER) // 기본 사용자 역할 설정
                .build();
    }

//    public Address createAddress(CreateMemberRequest request) {
//        return Address.builder()
//                .detailAddress(request.voucherAddress())
//                .addressName(request.addressName())
//                .point(GeometryConverter.coordinateToPoint(request.latitude(), request.longitude()))
//                .build();
//    }

    public MemberInfoResponse MembertoMemberInfoResponse(Member member) {
        return MemberInfoResponse.builder()
                .id(member.getId())
                .email(member.getEmail())
                .name(member.getName())
                .disabled(member.isDisabled())
                .role(member.getRole())
                .address(member.getAddress().getDetailAddress())
                .build();
    }
}
