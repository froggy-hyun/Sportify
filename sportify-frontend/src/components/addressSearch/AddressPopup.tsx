import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '@/recoil/atom/addressModal';

import * as S from '@/styles/componentsStyles/AddressPopUp.styled';
import BaseInput from '@/components/ui/BaseInput';
import { useGenericMutation } from '@/service/mutations/customMutation';
import { addressesApi } from '@/service/mutations';
import { PopUpModal } from '../ui';
const AddressPopup = ({ place }: { place: kakao.maps.services.PlacesSearchResultItem }) => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [userInput, setUserInput] = useState<string>('');
  const onRegisterSuccess = () => {
    alert('등록 성공');
    location.reload();
  };

  const onRegisterError = () => {
    alert('등록 실패');
  };
  const { mutation: registerMutation } = useGenericMutation({
    mutationFn: addressesApi,
    onSuccessCb: onRegisterSuccess,
    onErrorCb: onRegisterError,
  });

  const onRegisterHandler = () => {
    const data = {
      latitude: Number(place.y),
      longitude: Number(place.x),
      address: place.road_address_name + ' ' + place.place_name,
      addressName: userInput,
    };
    registerMutation.mutate(data);
  };

  if (!modalOpen) return null;
  return (
    <PopUpModal page="address" onClose={() => setModalOpen(false)}>
      <S.Title>주소에 대해 설명해주세요.</S.Title>
      <S.Name>주소 이름</S.Name>
      <BaseInput
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        type="text"
        placeholder="주소를 지칭할 이름을 지어주세요."
      />
      <S.BtnContainer>
        <S.nextTimeBtn onClick={() => setModalOpen(false)}>다음에 하기</S.nextTimeBtn>
        <S.changeBtn onClick={onRegisterHandler}>변경하기</S.changeBtn>
      </S.BtnContainer>
    </PopUpModal>
  );
};

export default AddressPopup;
