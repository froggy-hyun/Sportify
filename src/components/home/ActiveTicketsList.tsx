import { activeTicketsData } from '@/constants/homeData';
import { TicketItemType } from '@/types/ticket';
import { Title } from '@/components';
import ActiveTicketItem from './TicketItem';

import * as S from '@/styles/pagesStyles/homeStyles/ActiveTicketsList.styled';

const ActiveTicketsList = () => {
  return (
    <S.TicketsListContainer>
      <Title title="현재 활동중인 이용권" color={false}/>
      
      <S.Tickets>
        {activeTicketsData.map((item: TicketItemType, index) => (
          <ActiveTicketItem
            key={index}
            title={item.title}
            address={item.address}
            start={item.start}
            end={item.end}
            ticket="active"
          />
        ))}
      </S.Tickets>
    </S.TicketsListContainer>
  );
};

export default ActiveTicketsList;
