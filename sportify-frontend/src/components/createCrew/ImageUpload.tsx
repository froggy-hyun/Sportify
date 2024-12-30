import { useEffect, useRef, useState } from 'react';
import * as S from '@/styles/pagesStyles/createCrewStyles/CreateCrewPage.styled';
import PlusImg from '@/assets/icon/etc/plus_Default.png';
import { useRecoilState } from 'recoil';
import { newCrewImgState } from '@/recoil/atom/newCrew';

const ImageUpload = ({ setIsUploading }) => {
  const photoInput = useRef<HTMLInputElement | null>(null);

  const [localPreview, setLocalPreview] = useState<string | null>(null);
  const [preview, setPreview] = useRecoilState(newCrewImgState);

  const handlePreview = () => {
    const file = photoInput.current?.files?.[0];
    if (!file) return;
    setLocalPreview(URL.createObjectURL(file));
    setPreview(file);
    // 이미지가 선택되었으므로 업로드 상태로 변경
    setIsUploading(true);
  };

  useEffect(() => {
    setIsUploading(false);
  }, [preview]);

  const handleImageReset = () => {
    setLocalPreview(null);
    setPreview(null);
    setIsUploading(false);

    if (photoInput.current) {
      photoInput.current.value = '';
    }
  };

  return (
    <S.UploadImgContainer>
      <S.UploadImg
        onClick={() => {
          if (preview === null) {
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
          <S.PreviewImg src={localPreview} alt="preview이미지" />
        ) : (
          <S.PlusImg src={PlusImg} alt="이미지업로드" />
        )}
      </S.UploadImg>
      {localPreview && (
        <S.DeleteImgBtn type="button" onClick={handleImageReset}>
          삭제
        </S.DeleteImgBtn>
      )}
    </S.UploadImgContainer>
  );
};

export default ImageUpload;
