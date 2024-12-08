import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from '@/styles/pagesStyles/createCrewStyles/CreateCrewPage.styled';

import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { newCrewImgState, newCrewState } from '@/recoil/atom/newCrew';
import { DifficultyLevelType, GenderRuleType, GoalType } from '@/constants/newCrew';

import { useGenericMutation } from '@/service/mutations/customMutation';
import { crewImgApi, newCrewApi } from '@/service/mutations';
import SelectorList from '@/components/createCrew/SelectList';
import ImageUpload from '@/components/createCrew/ImageUpload';
import Rule from '@/components/createCrew/Rule';
import Capacity from '@/components/createCrew/Capacity';
import Button from '@/components/ui/Button';
import { BaseInput, Divide, Title } from '@/components/ui';

const CreateCrewPage = () => {
  const [newCrew, setNewCrew] = useRecoilState(newCrewState);
  const newCrewImg = useRecoilValue(newCrewImgState);
  const [isUploading, setIsUploading] = useState(false);
  const resetNewCrew = useResetRecoilState(newCrewState); // 상태 리셋 함수
  const resetNewCrewImg = useResetRecoilState(newCrewImgState); // 이미지 상태 리셋 함수
  const navigate = useNavigate();
  const postId = useParams().id;

  useEffect(() => {
    resetNewCrew();
    resetNewCrewImg();
  }, []);

  const onCreateImgSuccess = (res) => {
    const newCrewImgId = res.data.data.imageId;
    setNewCrew((prev) => ({
      ...prev,
      imageId: newCrewImgId,
    }));

    newCrewMutation.mutate({
      newCrewInfo: {
        ...newCrew,
        imageId: newCrewImgId,
      },
      sportVoucherId: Number(postId),
    });
  };

  const onCreateSuccess = (res) => {
    alert('크루 생성 성공');
    navigate('/');
  };

  const onCreateError = (res) => {
    const errorCode = res.response.data;
    alert(errorCode.serverErrorMessage);
  };

  const { mutation: newCrewImgMutation } = useGenericMutation({
    mutationFn: crewImgApi,
    onSuccessCb: onCreateImgSuccess,
    onErrorCb: () => {
      alert('이미지 업로드에 실패했습니다.');
    },
  });

  const { mutation: newCrewMutation } = useGenericMutation({
    mutationFn: newCrewApi,
    onSuccessCb: onCreateSuccess,
    onErrorCb: onCreateError,
  });

  const handleChange = (value: string) => {
    setNewCrew((prev) => ({
      ...prev,
      crewName: value,
    }));
  };

  const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // 이미지가 업로드 중일 경우 처리 방지
    if (isUploading) {
      alert('이미지 업로드가 진행 중입니다. 잠시만 기다려주세요.');
      return;
    }

    if (newCrewImg) {
      newCrewImgMutation.mutate(newCrewImg);
    } else {
      newCrewMutation.mutate({
        newCrewInfo: {
          ...newCrew,
          imageId: null,
        },
        sportVoucherId: Number(postId),
      });
    }
  };
  return (
    <S.CreateCrewPageContainer encType="multipart/form-data">
      <S.CrewInfoContainer>
        <Title title="모임 기본 정보" color={true} />
        <Divide thin={true} />
        <S.InfoTitle>모임명</S.InfoTitle>
        <BaseInput
          placeholder="모임명을 입력하세요."
          value={newCrew.crewName}
          onChange={(e) => handleChange(e.target?.value)}
        />
        <S.InfoTitle>대표 이미지</S.InfoTitle>
        <ImageUpload setIsUploading={setIsUploading} />
      </S.CrewInfoContainer>
      <Divide />
      <S.CrewInfoContainer>
        <SelectorList
          title="목표를 설정하세요."
          items={GoalType}
          selectedItems={newCrew.goals}
          type="goal"
        />
        <S.LimitText>* 목표는 3개까지만 설정 가능합니다.</S.LimitText>
        <SelectorList
          title="성별을 설정하세요."
          items={GenderRuleType}
          selectedItems={newCrew.genderRule}
          type="gender"
        />
        <Rule />
        <S.LimitText>* 규칙은 3개까지만 설정 가능합니다.</S.LimitText>
        <SelectorList
          title="수준을 설정하세요."
          items={DifficultyLevelType}
          selectedItems={newCrew.difficultyLevel}
          type="level"
        />
        <Capacity />
      </S.CrewInfoContainer>
      <S.BtnContainer>
        <Button title="취소하기" width="12.3rem" color={true} onClick={() => navigate('/ticket')} />
        <Button title="생성하기" width="21.4rem" onClick={onSubmitHandler} />
      </S.BtnContainer>
    </S.CreateCrewPageContainer>
  );
};

export default CreateCrewPage;
