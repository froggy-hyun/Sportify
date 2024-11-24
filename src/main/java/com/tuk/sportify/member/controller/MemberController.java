package com.tuk.sportify.member.controller;

import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.dto.CreateMemberRequest;
import com.tuk.sportify.member.dto.LoginMemberRequest;
import com.tuk.sportify.member.dto.MemberInfoResponse;
import com.tuk.sportify.member.exception.EmptyMemberListException;
import com.tuk.sportify.member.exception.MemberNotFoundException;
import com.tuk.sportify.member.jwt.ApiResponseJson;
import com.tuk.sportify.member.jwt.token.dto.TokenInfo;
import com.tuk.sportify.member.principle.UserPrinciple;
import com.tuk.sportify.member.service.MemberService;
import com.tuk.sportify.member.service.mapper.MemberMapper;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper memberMapper;

    @PostMapping("/register")
    public Map<String, String> register(@Valid @RequestBody CreateMemberRequest request) {
        Member member = memberService.createMember(request);
        log.info("계정 생성 성공: {}", member);

        return Map.of("email", member.getEmail(), "username", member.getName());
    }

    @PostMapping("/login")
    public TokenInfo login(@Valid @RequestBody LoginMemberRequest request) {
        TokenInfo tokenInfo = memberService.loginMember(request.getEmail(), request.getPassword());
        log.info("Token issued: {}", tokenInfo);

        return tokenInfo; // TokenInfo DTO 직접 반환
    }

    @PostMapping("/logout")
    public ApiResponseJson logout(@AuthenticationPrincipal UserPrinciple userPrinciple, @RequestHeader("Authorization") String authHeader) {
        String email = userPrinciple.getEmail();

        log.info("로그아웃 이메일: {}", email);

        // Bearer 를 문자열에서 제외하기 위해 substring을 사용
        memberService.logoutMember(authHeader.substring(7), email);

        return new ApiResponseJson(HttpStatus.OK, "로그아웃 성공");
    }

    // 모든 회원 조회
    @GetMapping("/all")
    public List<MemberInfoResponse> getAllMembers() {
        List<Member> members = memberService.getAllMembers();

        return members.stream()
                .map(memberMapper::MembertoMemberInfoResponse)
                .toList();
    }

    // ID로 특정 회원 조회
    @GetMapping("/{id}")
    public MemberInfoResponse getMemberById(@PathVariable("id") Long id) {
        Member member = memberService.getMemberById(id);
        return memberMapper.MembertoMemberInfoResponse(member);
    }
}

