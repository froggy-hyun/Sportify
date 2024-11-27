import React from 'react';
import * as S from '@/styles/pagesStyles/createCrewStyles/CreateCrewPage.styled';
import SelectItem from './SelectItem';
import { DifficultyLevelKeyType, GenderRuleKeyType, GoalKeyType } from '@/recoil/atom/types';
import { Title } from '../ui';
import { DifficultyLevelType, GenderRuleType, GoalType } from '@/constants/newCrew';
import { useSetRecoilState } from 'recoil';
import { newCrewState } from '@/recoil/atom/newCrew';

interface SelectorProps<T> {
  title: string;
  items: Record<string, T>;
  selectedItems: T | T[];
  type: 'gender' | 'level' | 'goal';
}

const SelectorList = <T extends string>({
  title,
  items,
  selectedItems,
  type,
}: SelectorProps<T>) => {
  const keys = Object.keys(items) as (keyof typeof items)[]; // 명확히 키 타입 정의
  const setNewCrew = useSetRecoilState(newCrewState);

  const isSelected = (key: keyof typeof items) =>
    Array.isArray(selectedItems)
      ? selectedItems.includes(items[key])
      : selectedItems === items[key];

  const selectGoal = (item: GoalKeyType) => {
    const goal = GoalType[item];

    setNewCrew((prev) => {
      const { goals } = prev;
      if (goals.includes(goal)) {
        const updatedGoals = goals.filter((g) => g !== goal);
        return updatedGoals.length > 0 ? { ...prev, goals: updatedGoals } : prev;
      }
      if (goals.length < 3) {
        return { ...prev, goals: [...goals, goal] };
      }
      return prev;
    });
  };

  const selectGender = (item: GenderRuleKeyType) => {
    setNewCrew((prev) => ({
      ...prev,
      genderRule: GenderRuleType[item],
    }));
  };

  const selectLevel = (item: DifficultyLevelKeyType) => {
    setNewCrew((prev) => ({
      ...prev,
      difficultyLevel: DifficultyLevelType[item],
    }));
  };

  return (
    <S.SelectListContainer>
      <Title title={title} color={true} />
      <S.SelectContainer>
        {keys.map((key) => (
          <SelectItem
            key={key}
            title={key as GoalKeyType | GenderRuleKeyType | DifficultyLevelKeyType}
            select={isSelected(key)}
            onClick={
              type === 'goal'
                ? () => selectGoal(key as GoalKeyType)
                : type === 'gender'
                  ? () => selectGender(key as GenderRuleKeyType)
                  : () => selectLevel(key as DifficultyLevelKeyType)
            }
          />
        ))}
      </S.SelectContainer>
    </S.SelectListContainer>
  );
};

export default SelectorList;
