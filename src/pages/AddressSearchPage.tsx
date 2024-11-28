import { useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import * as S from '@/styles/componentsStyles/AddressSearch.styled';
import SearchResults from '@/components/addressSearch/SearchResults';
import MyAddressesList from '@/components/addressSearch/MyAddresses';
import { addressModalState } from '@/recoil/atom/addressModal';
import AddressPopup from '@/components/addressSearch/AddressPopup';
import BaseInput from '@/components/ui/BaseInput';
import { userAddressState } from '@/recoil/atom/userLocation';
import useSerchAddress from '@/hooks/useSerchAddress';

const AddressSearchPage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null); // 검색어 입력 DOM을 참조하기 위한 ref
  // const psRef = useRef<kakao.maps.services.Places | null>(null);
  const [places, setPlaces] = useState<kakao.maps.services.PlacesSearchResult>([]); // 검색 결과
  const location = useRecoilValue(userAddressState);

  const [selectedPlace, setSelectedPlace] =
    useState<kakao.maps.services.PlacesSearchResultItem | null>(null); // 주소 클릭 후  저장
  const [modalOpen, setModalOpen] = useRecoilState(addressModalState);

  const { searchPlaces } = useSerchAddress();
  // 장소 저장
  const handleSavedPlaces = (place: kakao.maps.services.PlacesSearchResultItem) => {
    setSelectedPlace(place);
    setModalOpen(true);
  };

  return (
    <S.SearchContainer>
      <BaseInput
        search={true}
        onChange={() => searchPlaces({ inputRef, setPlaces })}
        ref={inputRef}
        placeholder={
          location.address === '' ? '지번,도로명,건물명을 입력해주세요' : location.address
        }
      />
      {inputRef.current?.value ? (
        <SearchResults places={places} onPlaceClick={handleSavedPlaces} />
      ) : (
        <MyAddressesList />
      )}
      {modalOpen && selectedPlace && <AddressPopup place={selectedPlace} />}
    </S.SearchContainer>
  );
};
export default AddressSearchPage;
