import { memo } from 'react';
import styled from 'styled-components';

interface TitleProps {
  title: string;
  color: boolean;
  children?: React.ReactNode;
  login?: boolean;
}

const Title = memo(({ title, color, children, login = false }: TitleProps) => {
  // 더보기가 있으면
  if (children) {
    return (
      <TitleFlexStyle $color={color}>
        {title}
        {children}
      </TitleFlexStyle>
    );
  }

  // 더보기가 없으면
  return (
    <TitleStyle $color={color} $size={login}>
      {title}
    </TitleStyle>
  );
});

const TitleStyle = styled.p<{ $color: boolean; $size?: boolean }>`
  width: fit-content;
  font-size: ${(props) => (props.$size ? '2.8rem' : '2rem')};
  font-weight: bold;
  color: ${(props) => (props.$color ? 'var(--textC3, #333)' : 'var(--white, #fff)')};
  margin-bottom: 1.6rem;
`;

const TitleFlexStyle = styled.p<{ $color: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.$color ? 'var(--textC3, #333)' : 'var(--white, #fff)')};
  margin-bottom: 1.6rem;
`;

export default Title;
