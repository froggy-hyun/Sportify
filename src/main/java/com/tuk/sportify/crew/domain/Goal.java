package com.tuk.sportify.crew.domain;

import lombok.Getter;

@Getter
public enum Goal {
    FITNESS_ENHANCEMENT("체력 향상"),
    WEIGHT_CONTROL("체중 관리"),
    HEALTH_MAINTENANCE("건강 유지 및 예방"),
    STRESS_RELIEF("스트레스 해소"),
    REHABILITATION("재활 및 회복"),
    EXERCISE_HABIT("운동 습관 형성"),
    ACHIEVEMENT("성취"),
    SOCIAL_ACTIVITY("사회적 활동"),
    HOBBY("취미 및 여가"),
    OTHER("기타");

    private final String description;

    Goal(String description) {
        this.description = description;
    }
}
