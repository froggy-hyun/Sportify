import React from 'react';
import * as S from '@/styles/componentsStyles/componentsLayoutStyles/Input.styled';
import { forwardRef } from 'react';

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  search?: boolean; // 검색 스타일 여부
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ type = 'text', placeholder = '', search = false, ...props }, ref) => {
    return (
      <S.SearchInput type={type} placeholder={placeholder} search={search} ref={ref} {...props} />
    );
  }
);

export default BaseInput;
