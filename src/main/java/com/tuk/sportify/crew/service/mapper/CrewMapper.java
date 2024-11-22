package com.tuk.sportify.crew.service.mapper;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.crew.domain.CrewGoal;
import com.tuk.sportify.crew.domain.CrewRule;
import com.tuk.sportify.crew.dto.CreateCrewRequest;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CrewMapper {

    public Crew toCrew(
            final Member member, final SportVoucher sportVoucher, final CreateCrewRequest request) {
        List<CrewGoal> goals = request.goals().stream().map(CrewGoal::new).toList();
        List<CrewRule> rules = request.rules().stream().map(CrewRule::new).toList();

        return Crew.builder()
                .host(member)
                .crewGoals(goals)
                .crewRules(rules)
                .genderRule(request.genderRule())
                .name(request.crewName())
                .sportVoucher(sportVoucher)
                .build();
    }
}
