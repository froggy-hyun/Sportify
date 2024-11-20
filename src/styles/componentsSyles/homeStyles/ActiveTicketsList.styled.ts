import styled from 'styled-components';

export const TicketsListContainer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: var(--brandColor);
  padding: 3.6rem 0 3.6rem 2rem;
`;

export const TicketsListTitle = styled.h1`
  color: var(--white, #FFF);
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 1.6rem;
`;

export const  Tickets =  styled.div`
  overflow-x: auto;
  display: flex;
  width: 100%;

  /* 파이어폭스를 위한 스타일 */
   scrollbar-width: none;

  /* 웹킷(크롬, 사파리, 새로운 엣지) 브라우저를 위한 스타일 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

