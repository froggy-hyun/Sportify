package com.tuk.sportify.member.controller;

import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/members")
public class MemberController {

    private final MemberService userService;

    @Autowired
    public MemberController(MemberService userService) {
        this.userService = userService;
    }

    // 모든 회원 조회
    @GetMapping
    public List<Member> getAllMembers() {
        return userService.getAllMembers();
    }

    // ID로 특정 회원 조회
    @GetMapping("/{id}")
    public Optional<Member> getMemberById(@PathVariable Long id) {
        return userService.getMemberById(id);
    }
}

