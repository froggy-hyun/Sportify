import styled from 'styled-components';

export const CrewItemContainer = styled.div`
  width: 100%;
  border-bottom: solid 1px var(--grayBG);
  display:flex;
  align-items: center;

  padding:2rem 0%;
`;

export const CrewImgArea = styled.div`
  background-color: var(--grayBG);
  display: flex;
  align-items: center;
  justify-content: center; 
  border-radius: 100px;
  padding: 1.2rem;
`;

export const CrewImg = styled.img`
  height: 2.4rem;
  width:2.4rem;
  object-fit: contain;
  flex-shrink: 0;
  display: block;
`;

export const Name = styled.p`
 color: var(--textC3);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: normal;
  margin-left: 1.6rem;
`;