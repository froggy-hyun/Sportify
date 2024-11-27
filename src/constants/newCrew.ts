export const GoalType = {
  "체력 향상": "FITNESS_ENHANCEMENT",
  "체중 관리": "WEIGHT_CONTROL",
  "건강 유지 및 예방": "HEALTH_MAINTENANCE",
  "스트레스 해소": "STRESS_RELIEF",
  "재활 및 회복": "REHABILITATION",
  "운동 습관 형성": "EXERCISE_HABIT",
  "성취": "ACHIEVEMENT",
  "사회적 활동": "SOCIAL_ACTIVITY",
  "취미 및 여가": "HOBBY",
  "기타": "OTHER",
} as const;

export const GenderRuleType = {
  "남자만": "MALE_ONLY",
  "여자만": "FEMALE_ONLY",
  "상관없음": "DONT_CARE",
} as const;

export const DifficultyLevelType = {
  "초급": "BEGINER",
  "중급": "INTERMEDIATE",
  "고급": "ADVANCE",
  "자유": "EVERYONE",
} as const;