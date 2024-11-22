import React, { useEffect, useRef, useState } from 'react';

const AddressSearchPage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null); // 검색어 입력 DOM을 참조하기 위한 ref
  const psRef = useRef<kakao.maps.services.Places | null>(null);
  const [places, setPlaces] = useState<kakao.maps.services.PlacesSearchResult>([]); // 검색 결과
  const [myLocation, setMyLocation] = useState<kakao.maps.LatLng | undefined>(undefined); // 내 위치

  //  현재 위치 가져오기
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords;
        const defaultLocation = new window.kakao.maps.LatLng(latitude, longitude);
        setMyLocation(defaultLocation);
      },
      (error: GeolocationPositionError) => {
        console.error(error);
      }
    );
  }, []);

  useEffect(() => {
    const { kakao } = window;
    psRef.current = new kakao.maps.services.Places();
  }, []);

  const searchPlaces = () => {
    const ps = psRef.current;
    const keyword = inputRef.current?.value;

    if (!keyword) {
      // 키워드가 없을 경우 검색 결과와 페이지네이션 초기화
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
      { location: myLocation }
    );
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '500px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '250px',
          margin: '10px 0 30px 10px',
          padding: '5px',
          background: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <input onChange={searchPlaces} ref={inputRef} type="text" placeholder="키워드 입력" />
        </div>
        <hr style={{ borderTop: '2px solid #5F5F5F', margin: '3px 0' }} />
        <ul id="placesList">
          {places.map((place) => (
            <li key={place.id} className="item">
              <div>
                <h5>{place.place_name}</h5>
                {place.road_address_name && <span>{place.road_address_name}</span>}
                <span>{place.address_name}</span>
                <span>{place.phone}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default AddressSearchPage;
