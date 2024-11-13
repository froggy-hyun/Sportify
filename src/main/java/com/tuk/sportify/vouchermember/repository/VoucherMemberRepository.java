package com.tuk.sportify.vouchermember.repository;

import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.vouchermember.domain.VoucherMember;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface VoucherMemberRepository extends JpaRepository<VoucherMember, Long> {

    // 현재 사용중인 개인 이용권 조회
    @Query("select vm.sportVoucher from VoucherMember vm join fetch vm.sportVoucher where vm.member =: member")
    Slice<SportVoucher> findSportVoucherByMemberJoinFetch(Member member, PageRequest pageRequest);

    // 현재 참여중인 크루에 대한 이용권 조회
    @Query("select vm from VoucherMember vm join fetch vm.sportVoucher"
        + " join fetch vm.crew where vm.member =: member limit =:limit")
    Slice<VoucherMember> findByMemberJoinFetch(Member member, PageRequest pageRequest);
}
