package com.tuk.sportify.crewapplicant.domain;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.crew.domain.GenderRule;
import com.tuk.sportify.crewapplicant.exception.InvalidGenderException;
import com.tuk.sportify.global.exception.AuthException;
import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.vouchermember.domain.VoucherMember;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CrewApplicant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Crew crew;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Member member;

    @Enumerated(EnumType.STRING)
    private ApplicationStatus applicationStatus;

    public CrewApplicant(final Crew crew, final Member member) {
        this.crew = crew;
        this.member = member;
        validateGender();
        this.applicationStatus = ApplicationStatus.PENDING;
    }

    public void validateGender() {
        if (GenderRule.isNotValidGender(crew.getGenderRule(), member.getGender())) {
            throw new InvalidGenderException(ErrorCode.INVALID_GENDER);
        }
    }

    public VoucherMember approve(final Long memberId) {
        validateAuthority(memberId);
        this.applicationStatus = ApplicationStatus.APPROVED;
        crew.addParticipant();
        return new VoucherMember(this.member, crew.getSportVoucher(), crew);
    }

    public void reject(final Long memberId){
        validateAuthority(memberId);
        this.applicationStatus = ApplicationStatus.REJECTED;
    }

    private void validateAuthority(final Long memberId) {
        if (crew.isNotCrewHost(memberId)) {
            throw new AuthException(ErrorCode.IS_NOT_CREW_HOST);
        }
    }
}
