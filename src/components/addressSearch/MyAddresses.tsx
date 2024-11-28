// MyAddresses.tsx
import * as S from '@/styles/componentsStyles/AddressSearch.styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userAddressState } from '@/recoil/atom/userLocation';
import { myAddressesState } from '@/recoil/atom/myAddresses';
import { MyAddressesState } from '@/recoil/atom/types';
import { addressSelectApi } from '@/service/mutations';
import { useGenericMutation } from '@/service/mutations/customMutation';
import { useNavigate } from 'react-router-dom';

const MyAddressesList = () => {
  const [location, setLocation] = useRecoilState(userAddressState);
  const myAddressesList = useRecoilValue(myAddressesState);
  const navigate = useNavigate();

  const isCurrentLocation = (place: MyAddressesState) => place.address === location;

  const onSelectSuccess = (data) => {
    const newData = data.data.data.address;
    setLocation(newData);
    navigate('/ticket');
  };
  const { mutation: signUpMutation } = useGenericMutation({
    mutationFn: addressSelectApi,
    onSuccessCb: onSelectSuccess,
  });

  return (
    <S.SearchListContainer>
      {myAddressesList.map((place: MyAddressesState) => (
        <S.SearchMyItem
          key={place.addressId}
          onClick={() => {
            signUpMutation.mutate(place.addressId);
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
