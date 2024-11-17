package com.tuk.sportify.member.controller;

import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.dto.CreateMemberRequest;
import com.tuk.sportify.member.dto.LoginMemberRequest;
import com.tuk.sportify.member.jwt.token.dto.TokenInfo;
import com.tuk.sportify.member.service.MemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

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

    // 모든 회원 조회
    @GetMapping("/all")
    public List<Member> getAllMembers() {
        List<Member> members = memberService.getAllMembers();

        return members.stream()
                .findAny()
                .map(m -> members) // 목록이 비어있지 않으면 반환
                .orElseThrow(() -> new IllegalArgumentException("회원 목록이 없습니다."));
    }

    // ID로 특정 회원 조회
    @GetMapping("/{id}")
    public Member getMemberById(@PathVariable Long id) {
        return memberService.getMemberById(id)
                .orElseThrow(() -> new IllegalArgumentException("ID " + id + "에 해당하는 회원이 없습니다."));
    }

    // 공통 예외 처리: 유효성 검증 실패
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });

        log.error("Validation error: {}", errors);
        return ResponseEntity.badRequest().body(errors);
    }

    // 공통 예외 처리: IllegalArgumentException
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, String>> handleIllegalArgumentException(IllegalArgumentException ex) {
        log.error("IllegalArgumentException 발생: {}", ex.getMessage());
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(Map.of("error", ex.getMessage()));
    }
}
