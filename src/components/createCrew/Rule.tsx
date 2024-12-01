import React from 'react';
import { Title } from '../ui';
import * as K from '@/styles/pagesStyles/createCrewStyles/CreateCrewPage.styled';
import * as S from '@/styles/pagesStyles/createCrewStyles/Rule.styled';

import { useRecoilState } from 'recoil';
import { newCrewState } from '@/recoil/atom/newCrew';

import RuleItem from './RuleItem';

const Rule = () => {
  const [newCrew, setNewCrew] = useRecoilState(newCrewState);

  // + 버튼 클릭 시 새로운 input 추가
  const handleAddInput = () => {
    if (newCrew.rules.length < 3) {
      setNewCrew((prev) => ({
        ...prev,
        rules: [...newCrew.rules, ''],
      }));
    }
  };

  // input 값 변경 핸들러
  const handleChange = (index: number, value: string) => {
    setNewCrew((prev) => ({
      ...prev,
      rules: prev.rules.map((rule, i) => (i === index ? value : rule)),
    }));
  };

  // - 버튼 클릭 시 input 제거
  const handleRemoveInput = (index: number) => {
    setNewCrew((prev) => ({
      ...prev,
      rules: prev.rules.filter((_, i) => i !== index), // 해당 인덱스를 제외
    }));
  };

  return (
    <K.SelectListContainer>
      <Title cut={2} title="규칙을 설정하세요." color={'brand'} />
      <S.RulesContainer>
        {newCrew.rules.map((item, index) => (
          <RuleItem
            key={index}
            value={item}
            isLast={index === newCrew.rules.length - 1}
            onChange={(value) => handleChange(index, value)}
            onAdd={handleAddInput}
            onRemove={() => handleRemoveInput(index)}
          />
        ))}
      </S.RulesContainer>
    </K.SelectListContainer>
  );
};

export default Rule;
