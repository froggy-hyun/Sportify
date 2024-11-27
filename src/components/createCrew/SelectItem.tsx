import { DifficultyLevelKeyType, GenderRuleKeyType, GoalKeyType } from '@/recoil/atom/types';
import React from 'react';
import styled from 'styled-components';

interface selectItem {
  title: GoalKeyType | GenderRuleKeyType | DifficultyLevelKeyType;
  select: boolean;
  onClick: () => void;
}

const SelectItem = ({ title, onClick, select }: selectItem) => {
  return (
    <Item select={select} onClick={onClick}>
      {title}
    </Item>
  );
};

export default SelectItem;

export const Item = styled.button<{ select: boolean }>`
  display: flex;
  padding: 0.8rem 1.6rem;
  color: ${(props) => (props.select ? 'var(--white, #fff)' : 'var(--textC3)')};
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 10rem;
  background-color: ${(props) => (props.select ? 'var(--brandColor)' : 'var(--grayBG)')};

  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
`;
