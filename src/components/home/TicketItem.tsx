import { TicketItemType, TicketStatus } from '@/types/ticket';
import * as S from '@/styles/pagesStyles/homeStyles/TicketItem.styled';
import { TrendingTicketsState } from '@/recoil/atom/types';

export interface ActiveTicketItemProps extends TrendingTicketsState {
  ticket: TicketStatus;
}

const TicketItem = ({
  duration,
  address,
  requestNumberOfPerson,
  subCategory,
  voucherCourseName,
  ticket,
}: ActiveTicketItemProps) => {
  return (
    <S.TicketItemContainer ticket={ticket}>
      <S.TicketTitle>{voucherCourseName}</S.TicketTitle>
      <S.TicketAddress>{address}</S.TicketAddress>
      <S.TicketTagAndUsage>
        <S.UsageContainer>
          <S.TickeUsageTitle>이용기간</S.TickeUsageTitle>
          <S.TickeUsagePeriod>{duration}</S.TickeUsagePeriod>
        </S.UsageContainer>
        {ticket === 'trending' && (
          <S.TagsContainer>
            <S.Tag color={true}>마감임박</S.Tag>
            <S.Tag>{subCategory}</S.Tag>
          </S.TagsContainer>
        )}
      </S.TicketTagAndUsage>
    </S.TicketItemContainer>
  );
};

export default TicketItem;
