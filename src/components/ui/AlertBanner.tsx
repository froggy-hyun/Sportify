import * as S from '@/styles/componentsStyles/componentsLayoutStyles/AlertBanner.styled'

// Image imports
import alertImg from '@/assets/icon/etc/notice_Default.png';

// ### Notice ###
// 추후 알람 기능 가능성을 염두에 두고 만든 컴포넌트
const AlertBanner = () => {

  return (
    <S.AlertContainer>
        <S.AlertImg src={alertImg} alt="알림" />
        <S.AlertTitle>현재 위치의 주변 이용권을 우선적으로 표시합니다.</S.AlertTitle>
    </S.AlertContainer>
  );
};

export default AlertBanner;
