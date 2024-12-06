import React, { useEffect, useState, useMemo } from 'react';

const useValid = (changeValue: { email: string; password: string; name: string }) => {
  const [validText, setValidText] = useState({
    email: '',
    password: '',
    name: '',
  });

  // 정규식
  const patterns: { [key in keyof typeof changeValue]: RegExp } = {
    email: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
    password: /^.{8,15}$/, // 최소 8자리, 최대 15자리
    name: /^[ㄱ-ㅎ가-힣a-z0-9-_]{3,10}$/, // 특수문자 제외 3자 이상 10자 이하
  };

  const errorMessages: { [key in keyof typeof changeValue]: string } = {
    email: '이메일 형식에 맞게 작성해주세요.',
    password: '8자리 이상 16자리 미만으로 설정해주세요.',
    name: '특수문자 제외 3자 이상 10자 이하로 작성해주세요.',
  };

  const validateField = (field: keyof typeof changeValue, value: string): string => {
    if (value === '') {
      return '';
    }
    if (!patterns[field].test(value)) {
      return errorMessages[field];
    }
    return '';
  };


  const memoizedChangeValue = useMemo(() => changeValue, [changeValue.email, changeValue.password, changeValue.name]);

  useEffect(() => {
    const updatedValidText = { ...validText };
    (Object.keys(memoizedChangeValue) as Array<keyof typeof changeValue>).forEach((field) => {
      updatedValidText[field] = validateField(field, memoizedChangeValue[field]);
    });
    setValidText(updatedValidText);
  }, [memoizedChangeValue]);

  return { validText };
};

export default useValid;
