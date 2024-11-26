import React, { useRef, useState } from 'react';
import * as S from '@/styles/pagesStyles/CreateCrewPage.styled';
import { BaseInput, Divide, Title } from '@/components/ui';
import PlusImg from '@/assets/icon/etc/plus_Default.png';
const CreateCrewPage = () => {
  const photoInput = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handlePreview = () => {
    if (photoInput.current?.files != null)
      setPreview(URL.createObjectURL(photoInput.current?.files[0]));
  };

  return (
    <S.CreateCrewPageContainer>
      <S.CrewBasicInfoContainer>
        <Title title="모임 기본 정보" color={true} />
        <S.Divide />
        <S.InfoTitle>모임명</S.InfoTitle>
        <BaseInput placeholder="모임명을 입력하세요" />
        <S.InfoTitle>대표 이미지</S.InfoTitle>

        <S.UploadImg
          onClick={() => {
            if (!preview) {
              photoInput.current?.click();
            }
          }}
        >
          <input
            style={{ display: 'none' }} //보이지 않도록 하기 위해서
            accept="image/*"
            onChange={handlePreview}
            ref={photoInput}
            type="file"
          />
          {preview ? (
            <S.PreviewImg
              src={preview}
              alt="preview이미지"
              onClick={() => {
                setPreview(null);
              }}
            />
          ) : (
            <S.PlusImg src={PlusImg} alt="이미지업로드" />
          )}
        </S.UploadImg>
      </S.CrewBasicInfoContainer>
      <Divide />;
    </S.CreateCrewPageContainer>
  );
};

export default CreateCrewPage;
