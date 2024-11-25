import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick?: () => void;
}

const Button = ({ title, onClick, ...props }: ButtonProps) => {
  return (
    <Btn onClick={onClick} {...props}>
      {title}
    </Btn>
  );
};

export default Button;

export const Btn = styled.button`
  display: flex;
  padding: 1.2rem 0;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: normal;
  background-color: var(--brandColor);
`;
