import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { locationState } from '../recoil/atom/location';
import * as S from '../styles/AddressSearch.styled';
import SearchResults from '../components/SearchResults';
import MyAddressesList from '../components/MyAddresses';

const AddressSearchPage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null); // 검색어 입력 DOM을 참조하기 위한 ref
  const psRef = useRef<kakao.maps.services.Places | null>(null);
  const [places, setPlaces] = useState<kakao.maps.services.PlacesSearchResult>([]); // 검색 결과
  const location = useRecoilValue(locationState);

  useEffect(() => {
    const { kakao } = window;
    psRef.current = new kakao.maps.services.Places();
  }, [places]);

  const searchPlaces = () => {
    const ps = psRef.current;
    const keyword = inputRef.current?.value;

    if (!keyword) {
      // 키워드가 없을 경우 검색 결과
      setPlaces([]);
      return;
    }

    ps?.keywordSearch(
      keyword,
      (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색 결과를 최대 10개로 제한
          setPlaces(data.slice(0, 10));
        } else if (status === kakao.maps.services.Status.ERROR) {
          alert('검색 중 오류가 발생했습니다.');
        }
      },
      {
        location: new window.kakao.maps.LatLng(location.latitude, location.longitude),
      }
    );
  };

  return (
    <S.SearchContainer>
      <S.SearchInput
        onChange={searchPlaces}
        ref={inputRef}
        type="text"
        placeholder={
          location.address === '' ? '지번,도로명,건물명을 입력해주세요' : location.address
        }
      />
      {inputRef.current?.value ? <SearchResults places={places} /> : <MyAddressesList />}
    </S.SearchContainer>
  );
};
export default AddressSearchPage;
