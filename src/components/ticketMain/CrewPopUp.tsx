import React from 'react';
import { Button, Divide, PopUpModal } from '../ui';
import { useRecoilState } from 'recoil';
import { modalState } from '@/recoil/atom/addressModal';

import * as S from '@/styles/pagesStyles/ticketStyles/CrewPopUp.styled';
import personImg from '@/assets/icon/etc/notice_Default.png';

const CrewPopUp = ({ crewId }: { crewId: number }) => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);

  if (!modalOpen) return null;
  return (
    <PopUpModal page="crew" onClose={() => setModalOpen(false)}>
      <S.DifficultyLevel>초급</S.DifficultyLevel>
      <S.NameAndParticipantsContainer>
        <S.CrewName>필! 촉! 크로스!</S.CrewName>
        <S.RowContainer>
          <S.ParticipantsImg src={personImg} />
          <S.Participants>5/10</S.Participants>
        </S.RowContainer>
      </S.NameAndParticipantsContainer>
      <Divide thin={true} />
      <S.TitleContainer>
        <S.InfoTitle $color={false}>
          우리는 이런
          <S.InfoTitle $color={true}>목표</S.InfoTitle>가 있어요
        </S.InfoTitle>
      </S.TitleContainer>
      <S.ItemContainer>
        <S.Item>체중관리</S.Item>
        <S.Item>체중관리</S.Item>
        <S.Item>체중관리</S.Item>
      </S.ItemContainer>

      <S.TitleContainer>
        <S.InfoTitle $color={false}>
          우리는 이런
          <S.InfoTitle $color={true}>조건</S.InfoTitle>가 있어요
        </S.InfoTitle>
      </S.TitleContainer>
      <S.ItemContainer>
        <S.Item>남자</S.Item>
      </S.ItemContainer>
      <S.TitleContainer>
        <S.InfoTitle $color={false}>
          우리는 이런
          <S.InfoTitle $color={true}>규칙</S.InfoTitle>가 있어요
        </S.InfoTitle>
      </S.TitleContainer>
      <S.RuleContainer>
        <S.RowContainer>
          <S.CheckImg src={personImg} />
          <S.Rule>30분전에 만나 함께 이동해요!</S.Rule>
        </S.RowContainer>
        <S.RowContainer>
          <S.CheckImg src={personImg} />
          <S.Rule>30분전에 만나 함께 이동해요!</S.Rule>
        </S.RowContainer>
      </S.RuleContainer>
      <Divide thin={true} />
      <S.CheckContainer>
        <S.CheckBox />
        <S.Rule>모든 내용을 확인했습니다.</S.Rule>
      </S.CheckContainer>
      <S.BtnContainer>
        <Button title="다음에 하기" width="12.3rem" color={true} />
        <Button title="이웃 참여하기" width="21.4rem" color={false} />
      </S.BtnContainer>
    </PopUpModal>
  );
};

export default CrewPopUp;
