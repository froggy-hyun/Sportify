import React, { memo } from 'react';
import styled from 'styled-components';

interface SubTitleProps {
  title: string;
}

const LabelTitle = memo(({ title }: SubTitleProps) => {
  return <LabelTitleStyle>{title}</LabelTitleStyle>;
});

export default LabelTitle;

export const LabelTitleStyle = styled.label`
  margin-bottom: 1.2rem;
  color: var(--textC3);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: normal;
`;
