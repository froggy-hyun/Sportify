import { activeTicketsData } from '@/constants/homeData';
import ActiveTicketItem from './TicketItem';
import { TicketItemType } from '@/types/ticket';
import * as S from '@/styles/componentsSyles/homeStyles/ActiveTicketsList.styled';

const ActiveTicketsList = () => {
  return (
    <S.TicketsListContainer>
      <S.TicketsListTitle>현재 활동중인 이용권</S.TicketsListTitle>
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
