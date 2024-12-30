import * as S from '@/styles/pagesStyles/crewDetailStyles/CrewItemDetail.styled';
import crewImg from '@/assets/icon/etc/loginCircles.png';

const CrewItemDetail = ({ name }: { name: string }) => {
  return (
    <S.CrewItemContainer>
      <S.CrewImgArea>
        <S.CrewImg src={crewImg} alt="크루원" />
      </S.CrewImgArea>
      <S.Name>{name}</S.Name>
    </S.CrewItemContainer>
  );
};

export default CrewItemDetail;
