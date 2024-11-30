import React, { memo } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  title: string;
  width?: string;
  color?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = memo(({ title, onClick, width, color = false }: ButtonProps) => {
  return (
    <Btn onClick={onClick} $width={width} $color={color}>
      {title}
    </Btn>
  );
});

export default Button;

export const Btn = styled.button<{ $color: boolean; $width?: string }>`
  display: flex;
  cursor: pointer;
  padding: 1.2rem 0;
  justify-content: center;
  align-items: center;
  color: ${(props) => (!props.$color ? 'var(--white)' : 'var(--textC8)')};
  align-self: stretch;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: normal;
  background-color: ${(props) => (!props.$color ? 'var(--brandColor)' : 'var(--grayBG)')};
  width: ${(props) => props.$width || '100%'};
`;
