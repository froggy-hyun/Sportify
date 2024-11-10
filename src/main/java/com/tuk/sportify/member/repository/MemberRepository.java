package com.tuk.sportify.member.repository;

import com.tuk.sportify.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}

