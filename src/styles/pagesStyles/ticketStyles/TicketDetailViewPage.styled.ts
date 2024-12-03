import styled from 'styled-components';

export const DetailConatiner = styled.div`
  width: 100%;
  background: var(--white);
`;

export const TicketThumArea = styled.div`
  width: 100%;
  height:241px;
  background: var(--grayBG);
`;

export const TicketDataArea = styled.div`
  width: 100%;
  padding: 2rem;
`;

// 
export const TicketData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  margin-bottom: 3.2rem;
`;

export const TicketBasicDataArea = styled.div`
  width: 100%;
`;

export const TicketPrice = styled.p`
  font-size:1.8rem;
  font-weight: 700;
  color: var(--brandColor);
`;
export const TicketName = styled.p`
  font-size:2rem;
  font-weight: 700;
  color: var(--textC3);
  margin-top:0.8rem;
`;

export const TicketAddress = styled.p`
  font-size:1.4rem;
  font-weight: 400;
  color: var(--textC8);
`;

// 
export const TicketUtilDataArea = styled.div`
  width: 100%;
  margin:3.2rem 0;

  display: flex;
  flex-direction: column;
  gap:0.4rem;
`;

export const TicketPreson = styled.p`
  font-size:1.4rem;
  font-weight: 400;
  color: var(--textC3);
`;

export const TicketDuration = styled.p`
  font-size:1.4rem;
  font-weight: 400;
  color: var(--textC3);
`;

// 
export const DetailCrewContainer = styled.div`
  width: 100%;
  padding: 6rem 2rem;
`;

export const MoreBtn  = styled.button`
  color: var(--textC8); 
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  background: var(--white); 
`;

export const CrewList  = styled.div`
  width: 100%;
`;


// UtilDetail
export const UtilInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DetailArea = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const IconImage = styled.img`
  width:2rem;
`;

export const People = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--textC3);
  line-height:normal;
`;

export const Date = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--textC3);
  line-height:normal;
`;

export const Highlights = styled.span`
  font-weight: bold;
  color: var(--brandColor);
`;
