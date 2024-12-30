import { useNavigate } from 'react-router-dom';
import { Title } from '@/components';
import plusIcon from "@/assets/icon/etc/plus_White.png"
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

      {activityData.length > 0 ? (
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
      ) : (
        <S.EmptyMessage onClick={() => {
          navigate(`/ticket`);
        }}>
          <S.PlusIcon src={plusIcon} alt="plus" />
        </S.EmptyMessage>
      )}
    </S.TicketsListContainer>
  );
};

export default ActiveTicketsList;