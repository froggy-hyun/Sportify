import * as S from '@/styles/pagesStyles/homeStyles/MyNeighborItem.styled';
import arrowImg from '@/assets/icon/etc/arrow/rightArrow_Default.png';

const MyNeighborItem = ({ title, onClick }: { title: string; onClick: () => void }) => {
  return (
    <S.MyNeighborContainer onClick={onClick}>
      <S.MyNeighborTitle>{title}</S.MyNeighborTitle>
      <S.ArrowImg src={arrowImg} alt="바로가기" />
    </S.MyNeighborContainer>
  );
};

export default MyNeighborItem;
