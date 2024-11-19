package com.tuk.sportify.member.dto;

import com.tuk.sportify.member.domain.Role;
import lombok.Builder;

@Builder
public record MemberInfoResponse(
        Long id,
        String email,
        String name,
        int age,
        String phone,
        String address,
        boolean disabled,
        Role role
) {}
