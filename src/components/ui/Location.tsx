import { useRecoilValue } from 'recoil';
import { userAddressState } from '../../recoil/atom/userLocation';

import * as S from '@/styles/pagesStyles/homeStyles/Location.styled';
import arrowImg from '@/assets/icon/etc/arrow/rightArrow_White.png';
import { useNavigate } from 'react-router-dom';

const Location = () => {
  const userAddress = useRecoilValue(userAddressState);
  const navigate = useNavigate();
  return (
    <S.LocationContainer>
      <S.LocationTitle>{userAddress}</S.LocationTitle>
      <S.LocationImg src={arrowImg} alt="우측 화살표" onClick={() => navigate('/addressSearch')} />
    </S.LocationContainer>
  );
};

export default Location;
