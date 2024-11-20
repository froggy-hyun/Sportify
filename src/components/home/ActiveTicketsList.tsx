import React from 'react';
import { activeTicketsData } from '../../constants/homeData';
import ActiveTicketItem from './ActiveTicketItem';
import { TicketItem } from '../../types/ticket';
import * as S from '../../styles/componentsSyles/homeStyles/ActiveTicketsList.styled';

const ActiveTicketsList = () => {
  return (
    <S.TicketsListContainer>
      <S.TicketsListTitle>현재 활동중인 이용권</S.TicketsListTitle>
      <S.Tickets>
        {activeTicketsData.map((item: TicketItem, index) => (
          <ActiveTicketItem
            key={index}
            title={item.title}
            address={item.address}
            start={item.start}
            end={item.end}
          />
        ))}
      </S.Tickets>
    </S.TicketsListContainer>
  );
};

export default ActiveTicketsList;
