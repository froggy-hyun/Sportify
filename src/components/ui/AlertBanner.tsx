import * as S from '@/styles/componentsStyles/componentsLayoutStyles/AlertBanner.styled';

// Image imports
import alertImg from '@/assets/icon/etc/notice_Default.png';
interface AlertBannerProps {
  title: string;
}

// ### Notice ###
// 추후 알람 기능 가능성을 염두에 두고 만든 컴포넌트
const AlertBanner = ({ title }: AlertBannerProps) => {
  return (
    <S.AlertContainer>
      <S.AlertImg src={alertImg} alt="알림" />
      <S.AlertTitle>{title}</S.AlertTitle>
    </S.AlertContainer>
  );
};

export default AlertBanner;
