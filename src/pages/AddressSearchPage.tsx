import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import * as S from '@/styles/componentsStyles/AddressSearch.styled';
import SearchResults from '@/components/addressSearch/SearchResults';
import MyAddressesList from '@/components/addressSearch/MyAddresses';
import { modalState } from '@/recoil/atom/addressModal';
import AddressPopup from '@/components/addressSearch/AddressPopup';
import BaseInput from '@/components/ui/BaseInput';
import useSerchAddress from '@/hooks/useSerchAddress';
import { useQuery } from '@tanstack/react-query';
import { myAddressesApi } from '@/service/queries';
import { myAddressesState } from '@/recoil/atom/myAddresses';
import { currentLocationState } from '@/recoil/atom/currentLocation';

const AddressSearchPage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null); // 검색어 입력 DOM을 참조하기 위한 ref
  const [places, setPlaces] = useState<kakao.maps.services.PlacesSearchResult>([]); // 검색 결과
  const setMyAddresses = useSetRecoilState(myAddressesState);

  const myLocation = useRecoilValue(currentLocationState);
  const [selectedPlace, setSelectedPlace] =
    useState<kakao.maps.services.PlacesSearchResultItem | null>(null); // 주소 클릭 후  저장
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const { searchPlaces } = useSerchAddress();

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

  return (
    <S.SearchContainer>
      <BaseInput
        search={true}
        onChange={() => searchPlaces({ inputRef, setPlaces })}
        ref={inputRef}
        placeholder={
          myLocation.address === '' ? '지번,도로명,건물명을 입력해주세요' : myLocation.address
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
