import styled from 'styled-components';

export const TicketItemContainer = styled.button`
  padding: 2rem;
  margin-right: 1.6rem;
  flex-shrink: 0;
  display: flex;
  width: 29.2rem;
  height: 14.8rem;
  flex-direction: column;
  align-items: flex-start;
  background: var(--white);
`;

export const TicketTitle= styled.h2`
  color: var(--brandColor);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 0.4rem;
`;

export const TicketAddress= styled.p`
  color: var(   --textC8);
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 3.6rem;
  line-height: normal;
`;

export const TickeUsageTitle= styled.p`
  color: var(   --textC3);
  font-size: 1.2rem;
  line-height: normal;
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

export const TickeUsagePeriod= styled.p`
  color: var(   --textC3);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
`;