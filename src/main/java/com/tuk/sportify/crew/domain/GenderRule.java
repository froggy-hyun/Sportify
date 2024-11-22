package com.tuk.sportify.crew.domain;

import com.tuk.sportify.member.domain.Gender;

import java.util.List;

public enum GenderRule {
    MALE_ONLY(List.of(Gender.MALE)),
    FEMALE_ONLY(List.of(Gender.FEMALE)),
    DONT_CARE(List.of(Gender.FEMALE, Gender.MALE, Gender.OTHER));

    private final List<Gender> availableGenders;

    GenderRule(final List<Gender> availableGenders) {
        this.availableGenders = availableGenders;
    }

    public static boolean isNotValidGender(final GenderRule genderRule, final Gender gender) {
        return !genderRule.availableGenders.contains(gender);
    }
}
