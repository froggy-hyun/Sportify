import * as S from '@/styles/pagesStyles/homeStyles/TrendingTickets.styled';
import { activeTicketsData } from '@/constants/homeData';
import { TicketItemType } from '@/types/ticket';
import { Title } from '@/components';

import ActiveTicketItem from './TicketItem';
import { useRecoilValue } from 'recoil';
import { trendingTicketsState } from '@/recoil/atom/trendingTickets';

const TrendingTickets = () => {
  const trendingTicketData = useRecoilValue(trendingTicketsState);
  return (
    <S.TrendingTicketsContainer>
      <Title title="🔥 요즘 HOT한 운동 이용권" color={true}>
        <S.MoreBtn>더보기</S.MoreBtn>
      </Title>

      <S.TrendingTickes>
        {trendingTicketData && trendingTicketData.length > 0 ? (
          trendingTicketData.map((item) => (
            <ActiveTicketItem
              ticket="trending"
              key={item.voucherId}
              voucherCourseName={item.voucherCourseName}
              address={item.address}
              duration={item.duration}
              requestNumberOfPerson={item.requestNumberOfPerson}
              subCategory={item.subCategory}
            />
          ))
        ) : (
          <p>현재 HOT한 운동 이용권이 없습니다.</p>
        )}
      </S.TrendingTickes>
    </S.TrendingTicketsContainer>
  );
};

export default TrendingTickets;
