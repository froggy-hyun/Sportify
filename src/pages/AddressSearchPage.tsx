import { useEffect, useRef, useState } from 'react';
import * as S from '@/styles/componentsStyles/AddressSearch.styled';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { modalState } from '@/recoil/atom/addressModal';
import { myAddressesState } from '@/recoil/atom/myAddresses';
import { loadingState } from '@/recoil/atom/loading';

import SearchResults from '@/components/addressSearch/SearchResults';
import MyAddressesList from '@/components/addressSearch/MyAddresses';
import AddressPopup from '@/components/addressSearch/AddressPopup';
import BaseInput from '@/components/ui/BaseInput';
import Loading from '@/components/ui/Loading';

import useSerchAddress from '@/hooks/useSerchAddress';
import { useQuery } from '@tanstack/react-query';
import { myAddressesApi } from '@/service/queries';
import { addressInputState } from '@/recoil/atom/addressInput';

const AddressSearchPage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null); // 검색어 입력 DOM을 참조하기 위한 ref
  const [places, setPlaces] = useState<kakao.maps.services.PlacesSearchResult>([]); // 검색 결과
  const setMyAddresses = useSetRecoilState(myAddressesState);
  const [inputValue, setInputValue] = useRecoilState(addressInputState);

  const [selectedPlace, setSelectedPlace] =
    useState<kakao.maps.services.PlacesSearchResultItem | null>(null); // 주소 클릭 후  저장
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const { searchPlaces } = useSerchAddress();

  const loading = useRecoilValue(loadingState);

  const { isLoading, data, isError } = useQuery({
    queryKey: ['myAddresses'],
    queryFn: () => myAddressesApi(),
  });

  useEffect(() => {
    if (data) {
      const newData = data.data.data.addresses;
      setMyAddresses(newData);
    }
  }, [data]);

  // 장소 저장
  const handleSavedPlaces = (place: kakao.maps.services.PlacesSearchResultItem) => {
    setSelectedPlace(place);
    setModalOpen(true);
  };

  // 검색 Value
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  useEffect(() => {
    searchPlaces({ inputRef, setPlaces });
  }, [inputValue]);

  return (
    <S.SearchContainer>
      <BaseInput
        search={true}
        value={inputValue}
        onChange={handleInputChange}
        ref={inputRef}
        placeholder={'지번,도로명,건물명을 입력해주세요'}
      />
      {loading && <Loading />}
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
