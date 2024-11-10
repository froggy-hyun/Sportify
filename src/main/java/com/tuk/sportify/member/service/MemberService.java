package com.tuk.sportify.member.service;

import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    @Autowired
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
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

