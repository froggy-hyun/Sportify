import styled from 'styled-components';

export const AlertContainer = styled.div`
  width: calc(100% - 40px);
  height: fit-content;
  background-color: var(--grayBG);

  display: flex;
  padding: 1.2rem 1.6rem;
  margin:2rem auto 0 auto;
  border-radius: 8px;
  gap:1.2rem;
`;

export const AlertImg = styled.img`
    width: 1.6rem;
    height: auto;
`;

export const AlertTitle = styled.p`
  font-size: 1.4rem;
  color: var(--textC8);
`;
