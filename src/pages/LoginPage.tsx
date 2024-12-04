import React, { useState } from 'react';
import * as S from '@/styles/pagesStyles/LoginPage.styled';
import { BaseInput, Title } from '@/components/ui';
import Button from '@/components/ui/Button';

import circlesImg from '@/assets/icon/etc/loginCircles.png';
import { LoginState } from '@/recoil/atom/types';
import { useGenericMutation } from '@/service/mutations/customMutation';
import { loginApi } from '@/service/mutations';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [loginState, setLoginState] = useState<LoginState>({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (key: keyof typeof loginState, value: string) => {
    setLoginState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onLoginSuccess = (res) => {
    const token = res.data.data.tokenInfo.accessToken;
    localStorage.setItem('accessToken', token);
    localStorage.setItem('email', loginState.email);
    localStorage.setItem(`currentLocation${loginState.email}`, res.data.data.address.address);
    alert('로그인 성공');
    location.reload();
  };

  const onLoginError = (res) => {
    if (res.response.status === 400) {
      alert('비밀번호가 일치하지 않습니다');
    }
  };
  const { mutation: loginMutation } = useGenericMutation({
    mutationFn: loginApi,
    onSuccessCb: onLoginSuccess,
    onErrorCb: onLoginError,
  });

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate(loginState);
  };

  return (
    <S.LoginContainer onSubmit={onSubmitHandler}>
      <S.CirclesImg src={circlesImg} />
      <Title login={true} title="로그인" color={true} />
      <S.LogininputContainer>
        <BaseInput
          placeholder="아이디를 입력하세요."
          value={loginState.email}
          onChange={(e) => handleChange('email', e.target?.value)}
        />
        <BaseInput
          placeholder="비밀번호를 입력하세요"
          value={loginState.password}
          onChange={(e) => handleChange('password', e.target?.value)}
          type="password"
        />
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
