import styled from 'styled-components';

export const MyNeighborsContainer= styled.div`
  padding: 6rem 2rem;
  display: flex;
  width:100%;
  height: fit-content;
  flex-direction: column;
  background: var(--white);
`;

export const MyNeighborsTitle = styled.h1`
  color: var(--textC3);
  font-size: 2rem;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 1.6rem;
  position: relative;
`;

export const CirclesImg = styled.img`
  position: absolute;
  bottom :2.5rem;
  width: 5.4rem;
  height: 2.4rem;
  flex-shrink: 0;
`;

export const MyNeighbors = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ManageBtn  = styled.button`
  display: flex;
  margin-top: 0.4rem;
  padding: 1.2rem 0;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: normal;
  background-color: var(--brandColor);
`;