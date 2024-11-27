// MyAddresses.tsx
import * as S from '@/styles/componentsStyles/AddressSearch.styled';
import { myAddresses, MyAddresses } from '@/constants/myAddresses';
import { locationState } from '@/recoil/atom/location';
import { useRecoilValue } from 'recoil';
import useMyLocation from '@/hooks/useMyLocation';
const MyAddressesList = () => {
  const location = useRecoilValue(locationState);
  const { updateLocation } = useMyLocation();

  const isCurrentLocation = (place: MyAddresses) =>
    place.latitude === location.latitude && place.longitude === location.longitude;

  return (
    <S.SearchListContainer>
      {myAddresses.map((place: MyAddresses) => (
        <S.SearchMyItem
          key={place.id}
          onClick={() => {
            updateLocation(place.latitude, place.longitude, place.address);
          }}
        >
          <S.AddressNameContainer>
            <S.MyAddressName isCurrent={isCurrentLocation(place)}>{place.name}</S.MyAddressName>

            {isCurrentLocation(place) && (
              <S.CurrentAddressContainer>
                <S.CurrentAddress>현재 설정 위치</S.CurrentAddress>
              </S.CurrentAddressContainer>
            )}
          </S.AddressNameContainer>
          <S.Address>{place.address}</S.Address>
        </S.SearchMyItem>
      ))}
    </S.SearchListContainer>
  );
};

export default MyAddressesList;
