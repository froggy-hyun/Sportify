import styled from 'styled-components';

export const TicketContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 2.8rem;
`;

export const Ticket = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  border-bottom: 1px solid var(--grayBG);
  padding-bottom: 16px;
`;

export const Info = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const Location = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--textC8);
`;

export const Title = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--textC3);
`;

export const UtilInfoArea = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

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
  width: 2rem;
`;

export const People = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--textC3);
  line-height: normal;
`;

export const Date = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--textC3);
  line-height: normal;
`;

export const Price = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
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

export const Highlights = styled.span`
  font-weight: bold;
  color: var(--brandColor);
`;
