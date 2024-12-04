import * as S from '@/styles/pagesStyles/homeStyles/Location.styled';
import arrowImg from '@/assets/icon/etc/arrow/rightArrow_White.png';
import { useNavigate } from 'react-router-dom';

const Location = () => {
  const email = localStorage.getItem('email');
  const location = localStorage.getItem(`currentLocation${email}`);

  const navigate = useNavigate();
  return (

    <S.LocationContainer onClick={() => navigate('/addressSearch')}>
      <S.LocationTitle> {!location ? '서울 중구 세종대로 110 서울특별시청' : location}</S.LocationTitle>
      <S.LocationImg src={arrowImg} alt="우측 화살표" />
    </S.LocationContainer>
  );
};

export default Location;
