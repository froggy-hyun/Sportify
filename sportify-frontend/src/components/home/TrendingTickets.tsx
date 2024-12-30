import * as S from '@/styles/pagesStyles/homeStyles/TrendingTickets.styled';
import { useNavigate } from 'react-router-dom';

import { Title } from '@/components';

import ActiveTicketItem from './TicketItem';
import { useRecoilValue } from 'recoil';
import { trendingTicketsState } from '@/recoil/atom/trendingTickets';

const TrendingTickets = () => {
  const trendingTicketData = useRecoilValue(trendingTicketsState);
  const navigate = useNavigate();

  return (
    <S.TrendingTicketsContainer>
      <Title title="🔥 우리 지역 트렌드 이용권" color={true}>
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
              price={item.price}
              onClickItem={() => {
                navigate(`/ticketItem/${item.voucherId}`);
              }}
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
