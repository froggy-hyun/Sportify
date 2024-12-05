import React, { memo } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  title: string;
  width?: string;
  color?: boolean;
  outStorke?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button = memo(
  ({ disabled = false, title, onClick, width, color = false, outStorke = false }: ButtonProps) => {
    return (
      <Btn
        disabled={disabled}
        onClick={onClick}
        $width={width}
        $color={color}
        $outStorke={outStorke}
      >
        {title}
      </Btn>
    );
  }
);

export default Button;

export const Btn = styled.button<{ $color: boolean; $width?: string; $outStorke: boolean }>`
  display: flex;
  cursor: pointer;
  padding: 1.2rem 0;
  justify-content: center;
  align-items: center;

  color: ${(props) =>
    props.$outStorke ? 'var(--brandColor)' : !props.$color ? 'var(--white)' : 'var(--textC8)'};
  align-self: stretch;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  background-color: ${(props) =>
    props.$outStorke ? 'transparent' : !props.$color ? 'var(--brandColor)' : 'var(--grayBG)'};
  width: ${(props) => props.$width || '100%'};
  border: ${(props) =>
    props.$outStorke
      ? '1px solid var(--brandColor)'
      : !props.$color
        ? '1px solid var(--brandColor)'
        : '1px solid var(--grayBG)'};
`;
