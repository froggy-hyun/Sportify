package com.tuk.sportify.crew.domain;

import com.tuk.sportify.crewapplicant.exception.ExceedCapacityException;
import com.tuk.sportify.crewapplicant.exception.InvalidGenderException;
import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

import java.util.Objects;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Crew {

    @OneToMany(
            fetch = FetchType.LAZY,
            mappedBy = "crew",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private final List<CrewRule> crewRules = new ArrayList<>();
    @OneToMany(
            fetch = FetchType.LAZY,
            mappedBy = "crew",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private final List<CrewGoal> crewGoals = new ArrayList<>();
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Member host;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private SportVoucher sportVoucher;
    private String name;
    @Enumerated(EnumType.STRING)
    private GenderRule genderRule;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private CrewImage crewImage;
    @Enumerated(EnumType.STRING)
    private DifficultyLevel difficultyLevel;
    private Integer capacity;
    private Integer numberOfParticipants;

    @Builder
    public Crew(
            final Member host,
            final String name,
            final GenderRule genderRule,
            final List<CrewRule> crewRules,
            final List<CrewGoal> crewGoals,
            SportVoucher sportVoucher,
            CrewImage crewImage,
            DifficultyLevel difficultyLevel,
            Integer capacity) {
        this.host = host;
        this.name = name;
        this.genderRule = genderRule;
        this.sportVoucher = sportVoucher;
        this.crewImage = crewImage;
        this.difficultyLevel = difficultyLevel;
        this.capacity = capacity;
        this.numberOfParticipants = 0;
        addRules(crewRules);
        addGoals(crewGoals);
    }

    public void increaseParticipant() {
        numberOfParticipants++;
    }

    public void validateGender(final Member member) {
        if (GenderRule.isNotValidGender(this.getGenderRule(), member.getGender())) {
            throw new InvalidGenderException(ErrorCode.INVALID_GENDER);
        }
    }

    public void validateCapacity(){
        if(this.getNumberOfParticipants() + 1 > this.getCapacity()){
            throw new ExceedCapacityException(ErrorCode.EXCEED_CAPACITY);
        }
    }

    public boolean isNotCrewHost(final Long memberId) {
        return !host.getId().equals(memberId);
    }

    public String getCrewImage(){
        if (Objects.isNull(this.getCrewImage())) {
            return null;
        }
        return this.getCrewImage().getImageUrl();
    }

    // 연관관계 매핑
    public void addRules(final List<CrewRule> crewRules) {
        crewRules.forEach(cr -> cr.addCrew(this));
        this.crewRules.addAll(crewRules);
    }

    public void addGoals(final List<CrewGoal> crewGoals) {
        crewGoals.forEach(cg -> cg.addCrew(this));
        this.crewGoals.addAll(crewGoals);
    }
}
