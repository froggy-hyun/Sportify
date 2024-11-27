import React from 'react';
import * as S from '@/styles/pagesStyles/createCrewStyles/Rule.styled';

import PlusImg from '@/assets/icon/etc/plus_Default.png';
import MinusImg from '@/assets/icon/etc/minus_Default.png';

interface RuleItemProps {
  value: string;
  isLast: boolean;
  onChange: (value: string) => void;
  onAdd: () => void;
  onRemove: () => void;
}

const RuleItem = ({ value, isLast, onChange, onAdd, onRemove }: RuleItemProps) => (
  <S.RuleItem>
    <S.RuleItemInput
      isLast={isLast}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="규칙을 추가해보세요."
      disabled={!isLast}
    />
    <S.DeletePlusBtn
      src={isLast ? PlusImg : MinusImg}
      onClick={() => (isLast ? onAdd() : onRemove())}
    />
  </S.RuleItem>
);

export default RuleItem;
