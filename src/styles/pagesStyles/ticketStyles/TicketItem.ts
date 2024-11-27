import styled from 'styled-components';

export const TicketContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 2.8rem;
`;

export const Ticket = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
`;

export const TicketImageFrame = styled.div`
  width: fit-content;
  margin-right: 1.6rem;
`;

export const TicketImage = styled.img`
  width: 80px;
  height: auto;
  background-color: var(--grayBG);
  border-radius: 8px;
  padding: 12px;
`;

export const TicketInfo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TicketLocation = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--textC8);
  line-height: 1.2;
`;

export const TicketTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: var(--textC3);
  line-height: 1.4;
`;

export const TicketPeople = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--brandColor);
`;

export const NoneData = styled.div`
  width: 100%;
  text-align: center;
  background-color: var(--grayBG);
  padding: 3.2rem 1.6rem;

  font-size: 16px;
  font-weight: 400;
  color: var(--textC3);
  border-radius: 8px;
  
  margin-top: 2.8rem;
`;
