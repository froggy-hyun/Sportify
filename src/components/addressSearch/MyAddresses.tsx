// MyAddresses.tsx
import * as S from '@/styles/componentsStyles/AddressSearch.styled';
import { myAddresses, MyAddresses } from '@/constants/myAddresses';
import { useRecoilValue } from 'recoil';
import { userAddressState } from '@/recoil/atom/userLocation';
import { myAddressesState } from '@/recoil/atom/myAddresses';
import { MyAddressesState } from '@/recoil/atom/types';

const MyAddressesList = () => {
  const location = useRecoilValue(userAddressState);
  const myAddressesList = useRecoilValue(myAddressesState);
  const isCurrentLocation = (place: MyAddressesState) => place.address === location.address;

  return (
    <S.SearchListContainer>
      {myAddressesList.map((place: MyAddressesState) => (
        <S.SearchMyItem
          key={place.addressId}
          onClick={() => {
            // updateLocation(place.latitude, place.longitude, place.address);
          }}
        >
          <S.AddressNameContainer>
            <S.MyAddressName isCurrent={isCurrentLocation(place)}>
              {place.addressName}
            </S.MyAddressName>

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
