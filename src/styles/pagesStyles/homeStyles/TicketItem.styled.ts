import { TicketStatus } from '@/types/ticket';
import styled from 'styled-components';

  interface TicketItemProps {
    ticket : TicketStatus
  }
  interface TagColorProps {
     color? : boolean
  }

export const TicketItemContainer = styled.button<TicketItemProps>`
  padding: 2rem;
  margin: ${(props) => `
    0 
    ${props.ticket === "trending" ? '0' : '1.6rem'} 
    ${props.ticket === "trending" ? '1.2rem' : '0'} 
    0
  `};
  flex-shrink: 0;
  display: flex;
  width:${(props) => (props.ticket === "trending"? '35.3rem' : '29.2rem')};
  height: 14.8rem;
  flex-direction: column;
  align-items: flex-start;
  background: var(--white);
  border: ${(props) => (props.ticket === "trending" ? '1px solid #EEE;' : '')};
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

export const TicketInfoContainer = styled.div`
  display: flex;
  align-items: center; 
`;

export const NumPerson = styled.span`
  color: var(--brandColor);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: normal;
`;

export const InfoImg = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  flex-shrink: 0;
  margin-right: 0.8rem;
`;

export const TickekRequestPerson = styled.p`
  color: var(--textC3);
  font-size: 1.4rem;
  line-height: normal;
  font-weight: 400;
  margin-bottom: 0.4rem;
`;


export const TickeUsagePeriod= styled.p`
  color: var(   --textC3);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
`;

export const TicketTagAndUsage= styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;


export const Tag= styled.div<TagColorProps>`
  border-radius: 5.7rem;
  background: ${(props) => (props.color ? "var(--funcC1)" : "var(--brandColor)")};
  height: 2.2rem;
  margin-left: 0.8rem;
  padding: 0.4rem 1.2rem;
  color: var(--white);
  font-size: 1.2rem;
  font-weight: 700;
  line-height: normal;
  width: auto;
`;

export const UsageContainer= styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
`;

export const TagsContainer= styled.div`
  display: flex;
  align-items: end
`;