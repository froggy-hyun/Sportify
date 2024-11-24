package com.tuk.sportify.crew.service.mapper;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.crew.domain.CrewGoal;
import com.tuk.sportify.crew.domain.CrewImage;
import com.tuk.sportify.crew.domain.CrewRule;
import com.tuk.sportify.crew.domain.Goal;
import com.tuk.sportify.crew.dto.CreateCrewRequest;
import com.tuk.sportify.crew.dto.CrewDetailResponse;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;

import java.util.Objects;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CrewMapper {

    public Crew toCrew(
            final Member member,
            final SportVoucher sportVoucher,
            final CrewImage crewImage,
            final CreateCrewRequest request) {
        List<CrewGoal> goals = request.goals().stream().map(CrewGoal::new).toList();
        List<CrewRule> rules = request.rules().stream().map(CrewRule::new).toList();
        return Crew.builder()
                .host(member)
                .crewGoals(goals)
                .crewRules(rules)
                .crewImage(crewImage)
                .genderRule(request.genderRule())
                .name(request.crewName())
                .sportVoucher(sportVoucher)
                .difficultyLevel(request.difficultyLevel())
                .capacity(request.capacity())
                .build();
    }

    public CrewDetailResponse toCrewDetailResponse(final Crew crew) {
        return CrewDetailResponse.builder()
                .crewId(crew.getId())
                .capacity(crew.getCapacity())
                .numberOfParticipants(crew.getNumberOfParticipant())
                .crewName(crew.getName())
                .difficultyLevel(crew.getDifficultyLevel().getDescription())
                .goals(getGoalsToString(crew))
                .rules(crew.getCrewRules().stream().map(CrewRule::getRule).toList())
                .genderRule(crew.getGenderRule().getDescription())
                .imageUrl(findImage(crew))
                .build();
    }

    private String findImage(final Crew crew) {
        if( Objects.isNull(crew.getCrewImage())){
            return null;
        }
        return crew.getCrewImage().getImageUrl();
    }

    private List<String> getGoalsToString(final Crew crew) {
        return crew.getCrewGoals().stream()
                .map(CrewGoal::getGoal)
                .map(Goal::getDescription)
                .toList();
    }
}
