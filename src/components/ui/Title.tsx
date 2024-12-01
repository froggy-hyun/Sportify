import { memo } from 'react';
import styled from 'styled-components';

interface TitleProps {
  title: string;
  color: boolean | 'brand';
  children?: React.ReactNode;
  login?: boolean;
  cut?: number;
}

const Title = memo(({ title, color, children, login = false, cut }: TitleProps) => {
  const itemTitle = cut ? title.slice(cut) : title;

  // 더보기가 있으면
  if (children) {
    return (
      <TitleFlexStyle $color={color}>
        {itemTitle}
        {children}
      </TitleFlexStyle>
    );
  }

  // 더보기가 없으면
  return (
    <TitleContainer>
      <TitleStyle $color={color} $size={login}>
        {title.slice(0, cut)}
      </TitleStyle>
      <TitleStyle $color={true} $size={login}>
        {itemTitle}
      </TitleStyle>
    </TitleContainer>
  );
});

const TitleStyle = styled.p<{ $color: boolean | 'brand'; $size?: boolean }>`
  font-size: ${(props) => (props.$size ? '2.8rem' : '2rem')};
  font-weight: bold;
  color: ${(props) =>
    typeof props.$color === 'string'
      ? props.$color === 'brand'
        ? 'var(--brandColor)'
        : 'var(--textC3)'
      : props.$color
        ? 'var(--textC3)'
        : 'var(--white)'};
`;

const TitleFlexStyle = styled.p<{ $color: boolean | 'brand' }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.$color ? 'var(--textC3, #333)' : 'var(--white, #fff)')};
  margin-bottom: 1.6rem;
`;

const TitleContainer = styled.div`
  width: fit-content;
  margin-bottom: 1.6rem;
  display: flex;
`;
export default Title;
