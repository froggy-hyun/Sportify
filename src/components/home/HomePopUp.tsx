import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '@/recoil/atom/addressModal';
import * as S from '@/styles/pagesStyles/homeStyles/HomePopUp.styled';
import { Button, Divide, PopUpModal } from '../ui';

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
      <S.Title><S.Highlights>잠깐!</S.Highlights> 등록된 주소가 있나요?</S.Title>
      <Divide thin={true} />
      <S.InfoContainer>
        <S.Info>이용권은&nbsp;<S.Highlights>현재 위치</S.Highlights>를 기준으로 보여집니다.</S.Info>
        <S.Info>등록한 주소가 없다면 설정해보세요!</S.Info>
      </S.InfoContainer>

      <S.BtnContainer>
        <Button title="있어요" width="12.3rem" color={true} onClick={() => closePopUp(false)} />
        <Button title="주소 설정하기" width="21.4rem" onClick={() => closePopUp(true)} />
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
