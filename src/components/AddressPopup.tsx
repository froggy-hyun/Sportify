import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { addressModealState } from '../recoil/atom/addressModal';
import * as S from '../styles/AddressPopup';
import BaseInput from './BaseInput';
const AddressPopup = ({ place }: { place: kakao.maps.services.PlacesSearchResultItem }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useRecoilState(addressModealState);

  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (modalOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
        // 이벤트가 발생한 노드가 모달 컴포넌트 내부에 존재하지 않는다면 close
        setModalOpen(false);
      }
    };

    // 이벤트 리스너를 document 전체에 붙여줌
    document.addEventListener('mousedown', closeModal);

    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [modalOpen]);

  return (
    <S.Background>
      <S.Modal ref={modalRef}>
        <S.Title>주소에 대해 설명해주세요.</S.Title>
        <S.AddressName>주소 이름</S.AddressName>
        <BaseInput type="text" placeholder="주소를 지칭할 이름을 지어주세요." />
        <S.BtnContainer>
          <S.nextTimeBtn onClick={() => setModalOpen(false)}>다음에 하기</S.nextTimeBtn>
          <S.changeBtn>변경하기</S.changeBtn>
        </S.BtnContainer>
      </S.Modal>
    </S.Background>
  );
};

export default AddressPopup;
