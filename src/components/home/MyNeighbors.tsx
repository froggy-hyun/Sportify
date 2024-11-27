import { myNeighborsData } from '@/constants/homeData';
import { Title } from '@/components';
import * as S from '@/styles/pagesStyles/homeStyles/MyNeighbors.styled';

import MyNeighborItem from './MyNeighborItem';
import Button from '../ui/Button';
// import circlesImg from '@/assets/icon/etc/homeCircles.png';
{
  /* <S.CirclesImg src={circlesImg} /> */
}

const MyNeighbors = () => {
  return (
    <S.MyNeighborsContainer>
      <Title title="나만의 운동 이웃" color={true} />

      <S.MyNeighbors>
        {myNeighborsData.map((title, idx) => (
          <MyNeighborItem key={idx} title={title} />
        ))}
      </S.MyNeighbors>
      <Button title="관리하기" />
    </S.MyNeighborsContainer>
  );
};

export default MyNeighbors;
