package com.tuk.sportify.crew.domain;

import com.tuk.sportify.member.domain.Gender;

import lombok.Getter;

import java.util.List;

@Getter
public enum GenderRule {
    MALE_ONLY(List.of(Gender.MALE), "남자만"),
    FEMALE_ONLY(List.of(Gender.FEMALE), "여자만"),
    DONT_CARE(List.of(Gender.FEMALE, Gender.MALE, Gender.OTHER), "무관");

    private final List<Gender> availableGenders;
    private final String description;

    GenderRule(final List<Gender> availableGenders, String description) {
        this.availableGenders = availableGenders;
        this.description = description;
    }

    public static boolean isNotValidGender(final GenderRule genderRule, final Gender gender) {
        return !genderRule.availableGenders.contains(gender);
    }
}
