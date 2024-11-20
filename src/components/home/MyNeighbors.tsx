import React from 'react';
import { myNeighborsData } from '@/constants/homeData';
import * as S from '@/styles/componentsSyles/homeStyles/MyNeighbors.styled';

import MyNeighborItem from './MyNeighborItem';
import circlesImg from '@/assets/icon/etc/homeCircles.png';

const MyNeighbors = () => {
  return (
    <S.MyNeighborsContainer>
      <S.MyNeighborsTitle>
        나만의 운동 이웃
        <S.CirclesImg src={circlesImg} />
      </S.MyNeighborsTitle>
      <S.MyNeighbors>
        {myNeighborsData.map((title, idx) => (
          <MyNeighborItem key={idx} title={title} />
        ))}
      </S.MyNeighbors>
      <S.ManageBtn>관리하기</S.ManageBtn>
    </S.MyNeighborsContainer>
  );
};

export default MyNeighbors;
