package com.tuk.sportify.crew.domain;

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
import java.util.ArrayList;
import java.util.List;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Crew {

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

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "crew",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<CrewRule> crewRules = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "crew",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<CrewGoal> crewGoals = new ArrayList<>();

    @Builder
    public Crew(final Member host, final String name, final GenderRule genderRule,
        final List<CrewRule> crewRules, final List<CrewGoal> crewGoals) {
        this.host = host;
        this.name = name;
        this.genderRule = genderRule;
        addRules(crewRules);
        addGoals(crewGoals);
    }

    public boolean isNotCrewHost(final Long memberId){
        return !host.getId().equals(memberId);
    }

    // 연관관계 매핑
    public void addRules(final List<CrewRule> crewRules){
        crewRules.forEach(cr->cr.addCrew(this));
        this.crewRules.addAll(crewRules);
    }

    public void addGoals(final List<CrewGoal> crewGoals){
        crewGoals.forEach(cg->cg.addCrew(this));
        this.crewGoals.addAll(crewGoals);
    }

}
