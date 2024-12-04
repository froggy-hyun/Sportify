import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from '@/styles/pagesStyles/createCrewStyles/CreateCrewPage.styled';

import { useRecoilState, useRecoilValue } from 'recoil';
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
  const [waitingForImg, setWaitingForImg] = useState(false);
  const navigate = useNavigate();
  const postId = useParams().id;

  const onCreateImgSuccess = (res) => {
    const newCrewImgId = res.data.data.imageId;
    setNewCrew((prev) => ({
      ...prev,
      imageId: newCrewImgId,
    }));
  };
  // 감지 후 mutate 실행
  useEffect(() => {
    if (newCrew.imageId) {
      newCrewMutation.mutate({ newCrewInfo: newCrew, sportVoucherId: Number(postId) });
    }
  }, [newCrew.imageId]); // imageId 변경 시 실행
  const onCreateSuccess = (res) => {
    console.log(res);
    alert('크루 생성 성공');
    navigate('/');
  };

  const onCreateError = (res) => {
    if (res.response.status === 400) {
      alert('사용자가 생성할 수 없는 성별입니다.');
    }
  };
  const { mutation: newCrewImgMutation } = useGenericMutation({
    mutationFn: crewImgApi,
    onSuccessCb: onCreateImgSuccess,
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

  useEffect(() => {
    if (waitingForImg && newCrewImg) {
      newCrewImgMutation.mutate(newCrewImg);
      setWaitingForImg(false);
    }
  }, [newCrewImg]);

  const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newCrewImg) {
      newCrewImgMutation.mutate(newCrewImg);
    } else {
      setWaitingForImg(true);
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
        <ImageUpload />
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
