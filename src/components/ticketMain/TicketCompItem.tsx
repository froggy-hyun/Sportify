import * as S from '@/styles/pagesStyles/ticketStyles/TicketItem';
import { TicketCompItemProps } from '@/types/ticket';

import TicketImage from '@/assets/icon/category/categoryA_Default.png';

const TicketCompItem = ({ data, onClickItem } : TicketCompItemProps ) => {

  if (!data || data.length === 0) {
    return <S.NoneData>현재 제공중인 이용권이 없습니다.</S.NoneData>;
  }

  return (
    <S.TicketContainer>
      {data.map((ticket) => (
        <S.Ticket key={ticket.voucherId} onClick={() => onClickItem(ticket)}>
          <S.TicketImageFrame>
            <S.TicketImage src={TicketImage} />
          </S.TicketImageFrame>
          
          <S.TicketInfo>
            <div>
              <S.TicketLocation>{ticket.address}</S.TicketLocation>
              <S.TicketTitle>{ticket.voucherCourseName}</S.TicketTitle>
            </div>

            {/* <S.TicketPeople>{ticket.requestNumberOfPerson - 1}/{ticket.requestNumberOfPerson}명</S.TicketPeople> */}
            <S.TicketPeople>0/{ticket.requestNumberOfPerson}명</S.TicketPeople>
          </S.TicketInfo>
        </S.Ticket>
      ))}
    </S.TicketContainer>
  );
};

export default TicketCompItem;
