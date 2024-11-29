import React, { useRef, useState } from 'react';
import * as S from '@/styles/pagesStyles/createCrewStyles/CreateCrewPage.styled';
import PlusImg from '@/assets/icon/etc/plus_Default.png';
import { useRecoilState } from 'recoil';
import { newCrewImgState } from '@/recoil/atom/newCrew';

const ImageUpload = () => {
  const photoInput = useRef<HTMLInputElement | null>(null);

  const [localPreview, setLocalPreview] = useState<string | null>(null);
  const [preview, setPreview] = useRecoilState(newCrewImgState);

  const handlePreview = () => {
    const file = photoInput.current?.files?.[0];
    if (!file) return;

    setLocalPreview(URL.createObjectURL(file));
    setPreview(URL.createObjectURL(file));
  };

  return (
    <S.UploadImg
      onClick={() => {
        if (!preview) {
          photoInput.current?.click();
        }
      }}
    >
      <input
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handlePreview}
        ref={photoInput}
        type="file"
      />
      {localPreview ? (
        <S.PreviewImg
          src={localPreview}
          alt="preview이미지"
          onClick={() => {
            setPreview('');
          }}
        />
      ) : (
        <S.PlusImg src={PlusImg} alt="이미지업로드" />
      )}
    </S.UploadImg>
  );
};

export default ImageUpload;
