package com.tuk.sportify.member.service;

import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.repository.MemberRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
public class MemberServiceTest {

    @Autowired
    private MemberService memberService;

    @Autowired
    private MemberRepository memberRepository;

    // 각 테스트 전에 초기 데이터를 설정
    @BeforeEach
    public void setUp() {
        memberRepository.save(Member.builder()
                .email("test1@example.com")
                .password("password1")
                .name("Test Member1")
                .phone("123-456-7890")
                .build());

        memberRepository.save(Member.builder()
                .email("test2@example.com")
                .password("password2")
                .name("Test Member2")
                .phone("098-765-4321")
                .build());
    }

    // 전체 회원 조회 테스트
    @Test
    public void testGetAllMembers() {
        List<Member> members = memberService.getAllMembers();
        assertThat(members).hasSize(2);  // 초기 설정 데이터로 2명의 멤버가 저장되어 있음
    }

    // 특정 회원 조회 테스트 (ID로 조회)
    @Test
    public void testGetMemberById() {
        Member member = memberRepository.findAll().get(0);  // 첫 번째 멤버 가져오기
        Optional<Member> foundMember = memberService.getMemberById(member.getId());

        assertThat(foundMember).isPresent();
        assertThat(foundMember.get().getEmail()).isEqualTo(member.getEmail());
        assertThat(foundMember.get().getName()).isEqualTo(member.getName());
    }
}