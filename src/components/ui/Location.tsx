import * as S from '@/styles/pagesStyles/homeStyles/Location.styled';
import arrowImg from '@/assets/icon/etc/arrow/rightArrow_White.png';
import { useNavigate } from 'react-router-dom';

const Location = () => {
  const location = sessionStorage.getItem('currentLocation');

  const navigate = useNavigate();
  return (
    <S.LocationContainer>
      <S.LocationTitle>
        {!location ? '서울 중구 세종대로 110 서울특별시청' : location}
      </S.LocationTitle>
      <S.LocationImg src={arrowImg} alt="우측 화살표" onClick={() => navigate('/addressSearch')} />
    </S.LocationContainer>
  );
};

export default Location;
