import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '@/recoil/atom/addressModal';
import * as S from '@/styles/pagesStyles/homeStyles/HomePopUp.styled';
import { Button, Divide, PopUpModal, Title } from '../ui';

import { useNavigate } from 'react-router-dom';

const HomePopUp = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  if (!modalOpen) return null;

  const closePopUp = (move: boolean) => {
    if (isChecked) {
      const date = new Date();
      const expires = String(date.setHours(date.getHours() + 24));
      localStorage.setItem('homeVisited', expires);
    }
    setModalOpen(false);
    if (move) {
      navigate('/addressSearch');
    }
  };
  return (
    <PopUpModal page="main" onClose={() => setModalOpen(false)}>
      <S.TitleContainer>
        <Title color="brand" title="잠깐!" />
        &nbsp;
        <Title color={true} title="등록된 주소가 있나요?" />
      </S.TitleContainer>
      <Divide thin={true} />
      <S.InfoContainer>
        <S.Info $color={false}>
          이용권은&nbsp;
          <S.Info $color={true}>현재 위치</S.Info>를 기준으로 보여집니다.
        </S.Info>
        <S.Info $color={false}>등록한 주소가 없다면 설정해보세요!</S.Info>
      </S.InfoContainer>

      <S.BtnContainer>
        <Button title="있어요" width="10.6rem" color={true} onClick={() => closePopUp(false)} />
        <Button title="주소 설정하기" width="20.3rem" onClick={() => closePopUp(true)} />
      </S.BtnContainer>
      <S.CheckContainer>
        <S.CheckBox
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
          }}
        />
        <S.CheckExplain>오늘 하루동안 보지않기</S.CheckExplain>
      </S.CheckContainer>
    </PopUpModal>
  );
};

export default HomePopUp;
