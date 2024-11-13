package com.tuk.sportify.member.service;

import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.domain.Role;
import com.tuk.sportify.member.dto.CreateMemberRequest;
import com.tuk.sportify.member.jwt.token.TokenProvider;
import com.tuk.sportify.member.repository.MemberRepository;
import com.tuk.sportify.member.service.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    private static final String PASSWORD_REGEX = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$"; // 최소 8자리 + 영어, 숫자, 특수문자를 모두 포함해야함.
    private static final Pattern PASSWORD_PATTERN = Pattern.compile(PASSWORD_REGEX);
    private final MemberMapper memberMapper;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;

    public Member createMember(CreateMemberRequest request) {
        checkPasswordStrength(request.getPassword());

        //이미 등록된 이메일인지 체크
        if (memberRepository.existsByEmail(request.getEmail())) {
            log.info("이미 등록된 이메일={}", request.getEmail());
            throw new IllegalArgumentException("이미 등록된 이메일입니다.");
        }

        Member member = memberMapper.CreateMemberRequestToMember(request, passwordEncoder);
        return memberRepository.save(member);
    }

    private void checkPasswordStrength(String password) {
        //비밀번호 정책에 맞는지 체크
        if (PASSWORD_PATTERN.matcher(password).matches()) {
            return;
        }

        log.info("비밀번호 정책 미달");
        throw new IllegalArgumentException("비밀번호는 최소 8자리에 영어, 숫자, 특수문자를 포함해야 합니다.");
    }

    // 전체 회원 조회
    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    // ID로 회원 조회
    public Optional<Member> getMemberById(Long id) {
        return memberRepository.findById(id);
    }
}

