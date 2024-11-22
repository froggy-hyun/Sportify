import React from 'react';
import { locationState  } from '../recoil/atom/location';
import { useSetRecoilState } from 'recoil';
const useMyLocation = () => {
  const setMyLocation =useSetRecoilState(locationState ) 

  // 위치 가져오기
  const searchMyAddress =  () =>{
  navigator.geolocation.getCurrentPosition(
  (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords; 
        updateLocation(latitude, longitude);
     },
       (error: GeolocationPositionError) => {
        console.error(error);
      }
   );
  }




  // 위도,경도 -> 주소
  const updateLocation = (latitude: number, longitude: number, address? : string)  =>{

    if(address){
      setMyLocation({ address ,latitude,longitude})
    }
    else{

      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.coord2Address(
        longitude, // 경도
        latitude, // 위도
        (result, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const address = result[0]?.address?.address_name || '';
            setMyLocation({ address: address , latitude, longitude });
          }
        }
      );
    }
      
    }
    


  
  


  return { searchMyAddress , updateLocation};
};

export default useMyLocation;