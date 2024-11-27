import React from 'react';
import * as S from '@/styles/pagesStyles/createCrewStyles/CreateCrewPage.styled';
import { BaseInput, Divide, Title } from '@/components/ui';
import { useRecoilValue } from 'recoil';
import { newCrewState } from '@/recoil/atom/newCrew';
import { DifficultyLevelType, GenderRuleType, GoalType } from '@/constants/newCrew';
import SelectorList from '@/components/createCrew/SelectList';
import ImageUpload from '@/components/createCrew/ImageUpload';
import Rule from '@/components/createCrew/Rule';
import Capacity from '@/components/createCrew/Capacity';
import Button from '@/components/ui/Button';

const CreateCrewPage = () => {
  const newCrew = useRecoilValue(newCrewState);

  return (
    <S.CreateCrewPageContainer>
      <S.CrewInfoContainer>
        <Title title="모임 기본 정보" color={true} />
        <S.Divide />
        <S.InfoTitle>모임명</S.InfoTitle>
        <BaseInput placeholder="모임명을 입력하세요." />
        <S.InfoTitle>대표 이미지</S.InfoTitle>
        <ImageUpload />
      </S.CrewInfoContainer>
      <Divide />
      <S.CrewInfoContainer>
        <SelectorList
          title="목표를 설정하세요."
          items={GoalType}
          selectedItems={newCrew.goals}
          type="goal"
        />
        <S.LimitText>* 목표는 3개까지만 설정 가능합니다.</S.LimitText>
        <SelectorList
          title="성별을 설정하세요."
          items={GenderRuleType}
          selectedItems={newCrew.genderRule}
          type="gender"
        />
        <Rule />
        <S.LimitText>* 규칙은 3개까지만 설정 가능합니다.</S.LimitText>
        <SelectorList
          title="수준을 설정하세요."
          items={DifficultyLevelType}
          selectedItems={newCrew.difficultyLevel}
          type="level"
        />
        <Capacity />
      </S.CrewInfoContainer>
      <S.BtnContainer>
        <Button title="취소하기" width="12.3rem" color={true} />
        <Button title="생성하기" width="21.4rem" />
      </S.BtnContainer>
    </S.CreateCrewPageContainer>
  );
};

export default CreateCrewPage;
