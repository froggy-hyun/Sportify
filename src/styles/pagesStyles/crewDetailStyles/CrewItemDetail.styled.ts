import styled from 'styled-components';

export const CrewItemContainer = styled.div`
  width: 100%;
  height:8.6rem;
  border-bottom: solid 1px var(--grayBG);
  display:flex;
  align-items: center;
`;

export const CrewImgArea = styled.div`
  background-color: var(--grayBG);
  display: flex;
  width: 4.6rem;
  height: 4.6rem;
  align-items: center;
  justify-content: center; 
  border-radius: 50%;

`;

export const CrewImg = styled.img`
  width: 17.164px;
  height: 23px;
  object-fit: cover;
  flex-shrink: 0;
  
`;


export const Name = styled.p`
 color: var(--textC3);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: normal;
  margin-left: 1.6rem;
`;