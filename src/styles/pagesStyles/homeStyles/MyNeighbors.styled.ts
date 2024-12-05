import styled from 'styled-components';

export const MyNeighborsContainer = styled.div`
  padding: 6rem 2rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  background: var(--white);

  position: relative;
`;

export const CirclesImg = styled.img`
  position: absolute;
  top: 60px;
  left: 136px;
  transform: translate(50%, -50%);
`;

export const MyNeighbors = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 4px;
`;
