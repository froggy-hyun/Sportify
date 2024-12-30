package com.tuk.sportify.crew.domain;

import lombok.Getter;

@Getter
public enum DifficultyLevel {
    EVERYONE("자유"),
    BEGINNER("초급"),
    INTERMEDIATE("중급"),
    ADVANCED("고급");

    private final String description;

    DifficultyLevel(String description) {
        this.description = description;
    }
}
