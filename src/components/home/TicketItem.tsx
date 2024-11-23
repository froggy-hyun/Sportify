import { TicketItemType, TicketStatus } from '@/types/ticket';
import * as S from '@/styles/pagesStyles/homeStyles/TicketItem.styled';

export interface ActiveTicketItemProps extends TicketItemType {
  ticket: TicketStatus;
}

const TicketItem = ({ title, address, start, end, ticket, tags }: ActiveTicketItemProps) => {
  return (
    <S.TicketItemContainer ticket={ticket}>
      <S.TicketTitle>{title}</S.TicketTitle>
      <S.TicketAddress>{address}</S.TicketAddress>
      <S.TicketTagAndUsage>
        <S.UsageContainer>
          <S.TickeUsageTitle>이용기간</S.TickeUsageTitle>
          <S.TickeUsagePeriod>{`${start} ~ ${end}`}</S.TickeUsagePeriod>
        </S.UsageContainer>
        {ticket === 'trending' && tags && (
          <S.TagsContainer>
            {tags.map((tag) => (
              <S.Tag key={tag}>{tag}</S.Tag>
            ))}
          </S.TagsContainer>
        )}
      </S.TicketTagAndUsage>
    </S.TicketItemContainer>
  );
};

export default TicketItem;
