import React, { useRef } from 'react';
import * as S from '@/styles/pagesStyles/createCrewStyles/CreateCrewPage.styled';
import PlusImg from '@/assets/icon/etc/plus_Default.png';
import { useRecoilState } from 'recoil';
import { newCrewImgState } from '@/recoil/atom/newCrew';

const ImageUpload = () => {
  const photoInput = useRef<HTMLInputElement | null>(null);

  const [preview, setPreview] = useRecoilState(newCrewImgState);

  const handlePreview = () => {
    if (photoInput.current?.files != null)
      setPreview(URL.createObjectURL(photoInput.current?.files[0]));
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
  );
};

export default ImageUpload;
