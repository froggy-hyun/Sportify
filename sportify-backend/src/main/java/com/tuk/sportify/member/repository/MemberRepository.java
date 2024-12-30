package com.tuk.sportify.member.repository;

import com.tuk.sportify.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MemberRepository extends JpaRepository<Member, Long> {
    @Query("select m from Member m left join fetch m.address where m.email =:email")
    Optional<Member> findByEmail(@Param("email") String email);
    boolean existsByEmail(@Param("email") String email);
}

