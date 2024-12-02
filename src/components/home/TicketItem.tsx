import { TicketStatus } from '@/types/ticket';
import * as S from '@/styles/pagesStyles/homeStyles/TicketItem.styled';
import { ActivityTicketsState, TrendingTicketsState } from '@/recoil/atom/types';
import personImg from '@/assets/icon/etc/notice_Default.png';
import clockImg from '@/assets/icon/etc/notice_Default.png';

export interface ActiveTicketItemProps extends TrendingTicketsState, ActivityTicketsState {
  ticket: TicketStatus;
}

const TicketItem = ({
  duration,
  address,
  requestNumberOfPerson,
  voucherAddress,
  subCategory,
  voucherCourseName,
  ticket,
}: ActiveTicketItemProps) => {
  return (
    <S.TicketItemContainer ticket={ticket}>
      <S.TicketTitle>{voucherCourseName}</S.TicketTitle>
      <S.TicketAddress>{ticket === 'trending' ? address : voucherAddress}</S.TicketAddress>
      <S.TicketTagAndUsage>
        <S.UsageContainer>
          {ticket === 'trending' && (
            <S.TicketInfoContainer ticket={ticket}>
              <S.InfoImg src={personImg} alt="신청인원" />
              <S.TickekRequestPerson>
                신청인원 <S.NumPerson>{requestNumberOfPerson}</S.NumPerson> 명
              </S.TickekRequestPerson>
            </S.TicketInfoContainer>
          )}

          <S.TicketInfoContainer ticket={ticket}>
            {ticket === 'trending' ? (
              <S.InfoImg src={clockImg} alt="이용기간" />
            ) : (
              <S.TickeUsagePeriod>이용기간</S.TickeUsagePeriod>
            )}

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
