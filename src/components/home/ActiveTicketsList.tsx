import { useNavigate } from 'react-router-dom';
import { Title } from '@/components';
import ActiveTicketItem from './TicketItem';

import * as S from '@/styles/pagesStyles/homeStyles/ActiveTicketsList.styled';
import { ActivityTicketsState } from '@/recoil/atom/types';
import { useRecoilValue } from 'recoil';
import { activityTicketsState } from '@/recoil/atom/activityTickets';

const ActiveTicketsList = () => {
  const activityData = useRecoilValue(activityTicketsState);
  const navigate = useNavigate();

  return (
    <S.TicketsListContainer>
      <Title title="현재 이용중인 이용권" color={false} />

      <S.Tickets>
        {activityData.map((item: ActivityTicketsState) => (
          <ActiveTicketItem
            key={item.voucherId}
            voucherCourseName={item.voucherCourseName}
            voucherAddress={item.voucherAddress}
            duration={item.duration}
            ticket="active"
            onClickItem={() => {
              navigate(`/ticketItem/${item.voucherId}`);
            }}
          />
        ))}
      </S.Tickets>
    </S.TicketsListContainer>
  );
};

export default ActiveTicketsList;
