import * as S from '@/styles/pagesStyles/ticketStyles/TicketItem';
import { TicketCompItemProps } from '@/types/ticket';

import PeopleImage from '@/assets/icon/navigation/마이_DeActive.png'
import DateImage from '@/assets/icon/etc/period_Default.png'

const TicketCompItem = ({ data, onClickItem }: TicketCompItemProps) => {

  const formatToKRW = (number: number) => {
    return Intl.NumberFormat('ko-KR').format(number);
  };

  if (!data || data.length === 0) {
    return <S.NoneData>현재 제공중인 이용권이 없습니다.</S.NoneData>;
  }

  return (
    <S.TicketContainer>
      {data.map((ticket) => (
        <S.Ticket key={ticket.voucherId} onClick={() => onClickItem(ticket)}>
          <S.Info>
            <div>
              <S.Location>{ticket.address}</S.Location>
              <S.Title>{ticket.voucherCourseName}</S.Title>
            </div>

            <S.UtilInfoArea>
              <S.UtilInfo>
                <S.DetailArea>
                  <S.IconImage src={PeopleImage} alt="person" />
                  <S.People>{ticket.requestNumberOfPerson}명이 신청했어요</S.People>
                </S.DetailArea>

                <S.DetailArea>
                  <S.IconImage src={DateImage} alt="person" />
                  <S.Date>{ticket.duration}</S.Date>
                </S.DetailArea>
              </S.UtilInfo>
              <S.Price>{formatToKRW(ticket.price)}원</S.Price>
            </S.UtilInfoArea>
          </S.Info>
        </S.Ticket>
      ))}
    </S.TicketContainer>
  );
};

export default TicketCompItem;
