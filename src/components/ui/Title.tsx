import { memo } from 'react';
import styled from 'styled-components';

interface TitleProps {
  title: string;
  color: boolean;
}

const Title = memo(({ title, color }: TitleProps) => {

  return <TitleStyle color={color}>{title}</TitleStyle>;
});

const TitleStyle = styled.p<{ color: boolean }>`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.color ? 'var(--textC3, #333)' : 'var(--white, #fff)')};
  margin-bottom: 1.6rem;
`;

export default Title;
