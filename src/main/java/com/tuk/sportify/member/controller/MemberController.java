package com.tuk.sportify.member.controller;

import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.dto.CreateMemberRequest;
import com.tuk.sportify.member.dto.LoginMemberRequest;
import com.tuk.sportify.member.jwt.token.dto.ApiResponseJson;
import com.tuk.sportify.member.jwt.token.dto.TokenInfo;
import com.tuk.sportify.member.service.MemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;


@Slf4j
@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/register")
    public ApiResponseJson register(@Valid @RequestBody CreateMemberRequest request, BindingResult bindingResult) { //@ Valid를 통해 검증한 결과는 BindingResult를 통해 받아볼 수 있음

        if (bindingResult.hasErrors()) {
            throw new IllegalArgumentException("잘못된 요청입니다");
        }

        Member member = memberService.createMember(request);
        log.info("계정 생성 성공: {}", member);

        return new ApiResponseJson(
                HttpStatus.OK, Map.of("email", member.getEmail(), "username", member.getName())
        );
    }

    @PostMapping("/login")
    public ApiResponseJson login(@Valid @RequestBody LoginMemberRequest request, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new IllegalArgumentException("잘못된 요청입니다.");
        }

        TokenInfo tokenInfo = memberService.loginMember(request.getEmail(), request.getPassword());

        log.info("Token issued: {}", tokenInfo);

        return new ApiResponseJson(HttpStatus.OK, tokenInfo);
    }

    // 모든 회원 조회
    @GetMapping
    public List<Member> getAllMembers() {
        return memberService.getAllMembers();
    }

    // ID로 특정 회원 조회
    @GetMapping("/{id}")
    public Optional<Member> getMemberById(@PathVariable Long id) {
        return memberService.getMemberById(id);
    }
}

