package com.tuk.sportify.vouchermember.repository;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.vouchermember.domain.VoucherMember;

import org.springframework.data.domain.Limit;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VoucherMemberRepository extends JpaRepository<VoucherMember, Long> {

    // 현재 사용중인 개인 이용권 조회
    @Query(
            "select vm from VoucherMember vm join fetch vm.sportVoucher where vm.member =:member "
                    + "and vm.crew is null and vm.sportVoucher.course.endAt > :currentDate")
    List<SportVoucher> findSportVoucherByMemberJoinFetch(Member member, Integer currentDate, Limit limit);

    // 현재 참여중인 크루에 대한 이용권 조회
    @Query(
            "select vm from VoucherMember vm join fetch vm.sportVoucher"
                    + " join fetch vm.crew where vm.member =:member and vm.sportVoucher.course.endAt > "
                    + " :currentDate")
    List<VoucherMember> findByMemberJoinFetch(Member member, Integer currentDate, Limit limit);

    @Query(
            "select vm from VoucherMember vm join fetch vm.sportVoucher join fetch vm.crew where vm"
                    + ".member =:member and vm.sportVoucher.course.endAt > :currentDate")
    List<VoucherMember> findCurrentCrewsByMember( Member member, Integer currentDate);

    @Query(
            "select vm from VoucherMember vm join fetch vm.sportVoucher join fetch vm.crew where vm"
                    + ".member =:member and vm.sportVoucher.course.endAt < :currentDate")
    List<VoucherMember> findPastCrewsByMember(
        Member member, Integer currentDate, Pageable pageable);

    @Query(
            "select vm from VoucherMember vm join fetch vm.sportVoucher where vm.member =:member "
                    + "and vm.crew is null and vm.sportVoucher.course.endAt < :currentDate")
    List<SportVoucher> findPastSportVoucherByMemberJoinFetch(
        Member member, Integer currentDate, Pageable pageable);

    @Query("select vm from VoucherMember vm join fetch vm.member where vm.crew =:crew")
    List<VoucherMember> findByCrewJoinFetch(Crew crew);
}
