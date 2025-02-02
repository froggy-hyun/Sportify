import {
  DifficultyLevelKeyType,
  DisabledKey,
  GenderKey,
  GenderRuleKeyType,
  GoalKeyType,
} from '@/recoil/atom/types';

import styled from 'styled-components';

interface selectItem {
  title: GoalKeyType | GenderRuleKeyType | DifficultyLevelKeyType | GenderKey | DisabledKey;
  select: boolean;
  onClick: () => void;
}

const SelectItem = ({ title, onClick, select }: selectItem) => {
  return (
    <Item type="button" select={select} onClick={onClick}>
      {title}
    </Item>
  );
};

export default SelectItem;

export const Item = styled.button<{ select: boolean }>`
  padding: 0.8rem 1.6rem;
  color: ${(props) => (props.select ? 'var(--white, #fff)' : 'var(--textC3)')};
  border-radius: 10rem;
  background-color: ${(props) => (props.select ? 'var(--brandColor)' : 'var(--grayBG)')};

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.4;
`;