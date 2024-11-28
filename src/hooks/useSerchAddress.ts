import { currentLocationState } from '@/recoil/atom/currentLocation';

import React, { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';

interface  useSerchAddress {
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
  setPlaces: React.Dispatch<React.SetStateAction<kakao.maps.services.PlacesSearchResult>>
} 

const useSerchAddress = () => {
  const psRef = useRef<kakao.maps.services.Places | null>(null);
  const location = useRecoilValue(currentLocationState);
  
  useEffect(() => {
    const { kakao } = window;
    psRef.current = new kakao.maps.services.Places();
  }, []);


  
  const searchPlaces = ( { inputRef, setPlaces }: useSerchAddress) => {
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

  return {  searchPlaces };
};

export default  useSerchAddress