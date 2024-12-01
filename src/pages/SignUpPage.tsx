import React from 'react';
import * as S from '@/styles/pagesStyles/SignUpPage.styled';
import { Title, LabelTitle, BaseInput, Divide } from '@/components/ui';
import { useRecoilState } from 'recoil';
import { signUpState } from '@/recoil/atom/signUp';
import { Disabled, Gender } from '@/constants/signUpInfo';
import { DisabledKey, GenderKey } from '@/recoil/atom/types';
import SelectItem from '@/components/createCrew/SelectItem';
import Button from '@/components/ui/Button';
import { useGenericMutation } from '@/service/mutations/customMutation';
import { signUpApi } from '@/service/mutations';
import { useNavigate } from 'react-router-dom';
const SignUpPage = () => {
  const [signUpstate, setSignUpState] = useRecoilState(signUpState);
  const navigate = useNavigate();

  const selectGender = (item: GenderKey) => {
    setSignUpState((prev) => ({
      ...prev,
      gender: Gender[item],
    }));
  };

  const selectDisabled = (item: DisabledKey) => {
    setSignUpState((prev) => ({
      ...prev,
      disabled: Disabled[item],
    }));
  };

  const handleChange = (key: keyof typeof signUpstate, value: string) => {
    setSignUpState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSignUpSuccess = () => {
    alert('회원가입 성공');
    navigate('/login');
  };

  const onSignUpError = (res) => {
    if (res.response.status === 400) {
      alert('이미 존재하는 이메일입니다');
    }
  };
  const { mutation: signUpMutation } = useGenericMutation({
    mutationFn: signUpApi,
    onSuccessCb: onSignUpSuccess,
    onErrorCb: onSignUpError,
  });

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpMutation.mutate(signUpstate);
  };

  // 반복되는 부분 추후 컴포넌트화
  return (
    <S.SignUpContainer>
      <Title login={true} title="회원가입" color={true} />
      <S.SignUpInfoContainer onSubmit={onSubmitHandler}>
        <LabelTitle title="이메일" />
        <BaseInput
          placeholder="email@email.com"
          margin="0 0 1.6rem 0"
          value={signUpstate.email}
          onChange={(e) => handleChange('email', e.target?.value)}
        />
        <LabelTitle title="비밀번호" />
        <BaseInput
          placeholder="비밀번호를 입력해주세요."
          margin="0 0 3.2rem 0"
          value={signUpstate.password}
          onChange={(e) => handleChange('password', e.target?.value)}
        />
        <Divide thin={true} margin="0 0 3.2rem 0" />
        <LabelTitle title="닉네임" />
        <BaseInput
          placeholder="닉네임을 입력하세요."
          margin="0 0 1.6rem 0"
          value={signUpstate.name}
          onChange={(e) => handleChange('name', e.target?.value)}
        />
        <LabelTitle title="성별" />
        <S.SelectContainer>
          {(Object.keys(Gender) as Array<keyof typeof Gender>).map((key) => (
            <SelectItem
              key={key}
              title={key as GenderKey}
              select={signUpstate.gender === Gender[key]}
              onClick={() => selectGender(key as GenderKey)}
            />
          ))}
        </S.SelectContainer>
        <Divide thin={true} margin="3.2rem 0" />
        <S.DisabledContainer>
          <LabelTitle title="장애 유무" />
          <S.LimitText>* 장애 유무에 따라 제공하는 이용권이 다릅니다.</S.LimitText>
        </S.DisabledContainer>

        <S.SelectContainer>
          {(Object.keys(Disabled) as Array<keyof typeof Disabled>).map((key) => (
            <SelectItem
              key={key}
              title={key as DisabledKey}
              select={signUpstate.disabled === Disabled[key]}
              onClick={() => selectDisabled(key as DisabledKey)}
            />
          ))}
        </S.SelectContainer>
        <S.ButtonContainer>
          <Button title="가입하기" />
        </S.ButtonContainer>
      </S.SignUpInfoContainer>
    </S.SignUpContainer>
  );
};

export default SignUpPage;
