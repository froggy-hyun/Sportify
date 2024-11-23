import styled from 'styled-components';

export const CategroyItemContainer = styled.div`
  width: 33.3%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryImgArea = styled.div`
  padding: 2rem;

  background-color: var(--grayBG);
  border-radius: 10rem;
`;

export const CategoryImg = styled.img`
  width: 3.2rem;
  height: 3.2rem;
`;

export const CategoryTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--textC3);
  margin: 0.8rem 0 2rem 0;
`;
