package com.tuk.sportify.vouchermember.domain;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class VoucherMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="member_id")
    private Member member;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private SportVoucher sportVoucher;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Crew crew;

    @Builder
    public VoucherMember(final Member member, final SportVoucher sportVoucher, final Crew crew) {
        this.member = member;
        this.sportVoucher = sportVoucher;
        this.crew = crew;
    }

    public String getSportVoucherName(){
        return sportVoucher.getCourse().getName();
    }

    public String crewName(){
        return crew.getName();
    }

    public String getVoucherAddress(){
        return sportVoucher.getFacility().getBasicAddress();
    }
}
