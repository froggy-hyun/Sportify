import { myNeighborsData } from '@/constants/homeData';
import { Title } from '@/components';
import * as S from '@/styles/pagesStyles/homeStyles/MyNeighbors.styled';

import MyNeighborItem from './MyNeighborItem';
import Button from '../ui/Button';
import { myCrewsState } from '@/recoil/atom/myCrews';
import { useRecoilValue } from 'recoil';
// import circlesImg from '@/assets/icon/etc/homeCircles.png';
{
  /* <S.CirclesImg src={circlesImg} /> */
}

const MyNeighbors = () => {
  const myCrewsData = useRecoilValue(myCrewsState);
  return (
    <S.MyNeighborsContainer>
      <Title title="나만의 운동 이웃" color={true} />

      <S.MyNeighbors>
        {' '}
        {myCrewsData && myCrewsData.length > 0 ? (
          myCrewsData.map((title, idx) => <MyNeighborItem key={idx} title={title} />)
        ) : (
          <p>현재 나만의 운동 이웃이 없습니다.</p>
        )}
      </S.MyNeighbors>
      <Button title="관리하기" />
    </S.MyNeighborsContainer>
  );
};

export default MyNeighbors;
