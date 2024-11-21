import * as S from '@/styles/pagesStyles/homeStyles/TrendingTickets.styled';
import { activeTicketsData } from '@/constants/homeData';
import { TicketItemType } from '@/types/ticket';
import ActiveTicketItem from './TicketItem';

const TrendingTickets = () => {

  return (
    <S.TrendingTicketsContainer>
      <S.TrendingTicketsTitleContainer>
        <h1>🔥 요즘 HOT한 운동 이용권</h1>
        <S.MoreBtn>더보기</S.MoreBtn>
      </S.TrendingTicketsTitleContainer>
      
      <S.TrendingTickes>
        {activeTicketsData.map((item: TicketItemType, index) => (
          <ActiveTicketItem
            ticket="trending"
            key={index}
            title={item.title}
            address={item.address}
            start={item.start}
            end={item.end}
            tags={item.tags}
          />
        ))}
      </S.TrendingTickes>
    </S.TrendingTicketsContainer>
  );
};

export default TrendingTickets;
