import { useNavigate } from 'react-router-dom';
import { Title } from '@/components';
import * as S from '@/styles/pagesStyles/homeStyles/MyNeighbors.styled';

import MyNeighborItem from './MyNeighborItem';
import Button from '../ui/Button';
import { myCrewsState } from '@/recoil/atom/myCrews';
import { useRecoilValue } from 'recoil';
import circlesImg from '@/assets/icon/etc/homeCircles.png';

const MyNeighbors = () => {
  const myCrewsData = useRecoilValue(myCrewsState);
  const navigate = useNavigate();

  return (
    <S.MyNeighborsContainer>
      <Title title="나만의 운동 이웃" color={true} />
      <S.CirclesImg src={circlesImg} />

      <S.MyNeighbors>
        {' '}
        {myCrewsData && myCrewsData.length > 0 ? (
          myCrewsData.map((crew, idx) => <MyNeighborItem key={idx} title={crew.crewName} />)
        ) : (
          <p>현재 나만의 운동 이웃이 없습니다.</p>
        )}
      </S.MyNeighbors>
      <Button onClick={() => navigate('/manageCrew')} title="관리하기" />
    </S.MyNeighborsContainer>
  );
};

export default MyNeighbors;
