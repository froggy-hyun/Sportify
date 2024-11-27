import styled from 'styled-components';

export const CategroyItemContainer = styled.div`
  width: 33.3%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryImgArea = styled.div<{ isSelected: boolean }>`
  padding: 1.6rem;
  background-color: ${({ isSelected }) => (isSelected ? "var(--brandColor)" : "var(--grayBG)")};
  border-radius: 10rem;

  transition:all 0.3s;
`;

export const CategoryImg = styled.img`
  width: 4.8rem;
  height: 4.8rem;
`;

export const CategoryTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--textC3);
  margin: 0.8rem 0 2rem 0;
`;
