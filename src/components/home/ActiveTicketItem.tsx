import React from 'react';
import { TicketItem } from '../../types/ticket';
import * as S from '../../styles/componentsSyles/homeStyles/ActiveTicketItem.styled';

const ActiveTicketItem = ({ title, address, start, end }: TicketItem) => {
  return (
    <S.TicketItemContainer>
      <S.TicketTitle>{title}</S.TicketTitle>
      <S.TicketAddress>{address}</S.TicketAddress>
      <S.TickeUsageTitle>이용기간</S.TickeUsageTitle>
      <S.TickeUsagePeriod>{`${start} ~ ${end}`}</S.TickeUsagePeriod>
    </S.TicketItemContainer>
  );
};

export default ActiveTicketItem;
