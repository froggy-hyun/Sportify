import React from 'react';
import * as S from '@/styles/pagesStyles/LoginPage.styled';
import { BaseInput, Title } from '@/components/ui';
import Button from '@/components/ui/Button';

import circlesImg from '@/assets/icon/etc/loginCircles.png';

const LoginPage = () => {
  return (
    <S.LoginContainer>
      <S.CirclesImg src={circlesImg} />
      <Title title="로그인" color={true} />
      <S.LogininputContainer>
        <BaseInput placeholder="아이디를 입력하세요." />
        <BaseInput placeholder="비밀번호를 입력하세요" />
      </S.LogininputContainer>
      <Button title="로그인" />
      <S.SignUpContainer>
        <S.NotMember>아직 회원이 아니신가요?</S.NotMember>
        <S.SignUpLink to={'/signUp'}>회원가입하기</S.SignUpLink>
      </S.SignUpContainer>
    </S.LoginContainer>
  );
};

export default LoginPage;
