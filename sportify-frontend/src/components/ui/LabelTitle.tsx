import { memo } from 'react';
import styled from 'styled-components';

interface SubTitleProps {
  title: string;
}

const LabelTitle = memo(({ title }: SubTitleProps) => {
  return <LabelTitleStyle>{title}</LabelTitleStyle>;
});

export default LabelTitle;

export const LabelTitleStyle = styled.label`
  margin: 1.6rem 0 1.2rem 0.4rem;

  color: var(--textC3);
  font-size: 1.6rem;
  font-weight: 700;
`;
