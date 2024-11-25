import { useRecoilValue } from 'recoil';
import { userAddressState } from '../../recoil/atom/userLocation';

import * as S from '@/styles/pagesStyles/homeStyles/Location.styled';
import arrowImg from '@/assets/icon/etc/arrow/rightArrow_White.png';

const Location = () => {
  const userAddress = useRecoilValue(userAddressState);

  return (
    <S.LocationContainer>
      <S.LocationTitle>{userAddress}</S.LocationTitle>
      <S.LocationImg src={arrowImg} alt="우측 화살표" />
    </S.LocationContainer>
  );
};

export default Location;
