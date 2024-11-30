import { TicketItemType, TicketStatus } from '@/types/ticket';
import * as S from '@/styles/pagesStyles/homeStyles/TicketItem.styled';
import { TrendingTicketsState } from '@/recoil/atom/types';
import personImg from '@/assets/icon/etc/notice_Default.png';
import clockImg from '@/assets/icon/etc/notice_Default.png';

export interface ActiveTicketItemProps extends TrendingTicketsState {
  ticket: TicketStatus;
}

const TicketItem = ({
  duration,
  address,
  requestNumberOfPerson,
  price,
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
          <S.TicketInfoContainer>
            <S.InfoImg src={personImg} alt="신청인원" />
            <S.TickekRequestPerson>
              신청인원 <S.NumPerson>{requestNumberOfPerson}</S.NumPerson> 명
            </S.TickekRequestPerson>
          </S.TicketInfoContainer>

          <S.TicketInfoContainer>
            <S.InfoImg src={clockImg} alt="이용기간" />
            <S.TickeUsagePeriod>{duration}</S.TickeUsagePeriod>
          </S.TicketInfoContainer>
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
