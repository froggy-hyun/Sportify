import styled from 'styled-components';

export const CrewDetailContainer = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const CrewDetailInfoContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
`;

export const CrewListTitleContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
 
  align-items: end;
  margin: 4rem 0 0 0;
`;

export const CrewCount = styled.p`
  color: var(--textC3);
  font-size: 1.4rem;
  font-weight: 400;
  margin-left: 1.2rem;
  margin-bottom: 1.6rem;
`;

export const CrewListContainer = styled.div`
  width: 100%;
  height: fit-content;
  flex-direction: column;
  margin-bottom:16.2rem ;
`;

export const BtnContainer = styled.div`
  width:100%;
  padding:0 2rem;
  display: flex;
  justify-content: space-between;

  position:fixed;
  bottom:4rem;
  left:0;
`;