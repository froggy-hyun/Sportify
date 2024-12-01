import React, { useEffect, useState } from 'react';
import { Button, Divide, PopUpModal } from '../ui';
import { useRecoilState } from 'recoil';
import { modalState } from '@/recoil/atom/addressModal';

import * as S from '@/styles/pagesStyles/ticketStyles/CrewPopUp.styled';
import personImg from '@/assets/icon/etc/notice_Default.png';
import { useQuery } from '@tanstack/react-query';
import { crewInfoApi } from '@/service/queries';
import { crewInfoState } from '@/recoil/atom/crewInfo';
import { useGenericMutation } from '@/service/mutations/customMutation';
import { participateCrewApi } from '@/service/mutations';
import { useNavigate } from 'react-router-dom';

const CrewPopUp = ({ crewId }: { crewId: number }) => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [isChecked, setIsChecked] = useState(false);
  const [crewInfo, setCrewInfo] = useRecoilState(crewInfoState);
  const navigate = useNavigate();

  const { isLoading, data, isError } = useQuery({
    queryKey: ['crewInfo'],
    queryFn: () => crewInfoApi(crewId),
  });

  useEffect(() => {
    if (data) {
      const newData = data.data.data;
      setCrewInfo(newData);
    }
  }, [data]);

  const onParticipateSuccess = (res) => {
    alert('크루에 참여하였습니다');
    navigate('/');
  };

  const onParticipateError = (res) => {
    const errorCode = res.response.data;
    alert(errorCode.serverErrorMessage);
  };

  const { mutation: participateCrewMutation } = useGenericMutation({
    mutationFn: participateCrewApi,
    onSuccessCb: onParticipateSuccess,
    onErrorCb: onParticipateError,
  });

  if (!modalOpen) return null;

  const handleCrew = () => {
    participateCrewMutation.mutate(crewId);
  };

  return (
    <PopUpModal page="crew" onClose={() => setModalOpen(false)}>
      <S.DifficultyLevel>{crewInfo.difficultyLevel}</S.DifficultyLevel>
      <S.NameAndParticipantsContainer>
        <S.CrewName>{crewInfo.crewName}</S.CrewName>
        <S.RowContainer>
          <S.ParticipantsImg src={personImg} />
          <S.Participants>{crewInfo.numberOfParticipants + '/' + crewInfo.capacity}</S.Participants>
        </S.RowContainer>
      </S.NameAndParticipantsContainer>
      <Divide thin={true} />

      <S.TitleContainer>
        <S.InfoTitle $color={false}>
          우리는 이런
          <S.InfoTitle $color={true}>목표</S.InfoTitle>가 있어요.
        </S.InfoTitle>
      </S.TitleContainer>

      {crewInfo.goals.map((goal: string, index) => (
        <S.ItemContainer key={index}>
          <S.Item>{goal}</S.Item>
        </S.ItemContainer>
      ))}

      <S.TitleContainer>
        <S.InfoTitle $color={false}>
          우리는 이런
          <S.InfoTitle $color={true}>조건</S.InfoTitle>이 있어요.
        </S.InfoTitle>
      </S.TitleContainer>
      <S.ItemContainer>
        <S.Item>{crewInfo.genderRule}</S.Item>
      </S.ItemContainer>
      <S.TitleContainer>
        <S.InfoTitle $color={false}>
          우리는 이런
          <S.InfoTitle $color={true}>규칙</S.InfoTitle>이 있어요.
        </S.InfoTitle>
      </S.TitleContainer>
      <S.RuleContainer>
        {crewInfo.rules.map((rule: string, index) => (
          <S.RowContainer>
            <S.CheckImg src={personImg} />
            <S.Rule>{rule}</S.Rule>
          </S.RowContainer>
        ))}
      </S.RuleContainer>
      <Divide thin={true} />
      <S.CheckContainer>
        <S.CheckBox
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
          }}
        />
        <S.Rule>모든 내용을 확인했습니다.</S.Rule>
      </S.CheckContainer>
      <S.BtnContainer>
        <Button title="다음에 하기" width="12.3rem" color={true} />
        <Button
          disabled={!isChecked}
          title="이웃 참여하기"
          width="21.4rem"
          color={!isChecked}
          onClick={handleCrew}
        />
      </S.BtnContainer>
    </PopUpModal>
  );
};

export default CrewPopUp;
