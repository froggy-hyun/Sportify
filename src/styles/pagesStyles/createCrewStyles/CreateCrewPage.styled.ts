import styled from 'styled-components';

export const CreateCrewPageContainer= styled.div`
  width: 100%;
  margin-top:4rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export const CrewInfoContainer= styled.div`
  padding: 0 2rem;
`;

export const SelectListContainer= styled.div`
  margin-top: 6rem;
`;

export const Divide = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--grayBG);
`;


export const InfoTitle = styled.h2`
  margin: 2.4rem 0 1.2rem 0;
  color: var(--black);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: normal;
`;


export const UploadImg= styled.div`
  width: 10.7rem;
  height: 10.7rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  margin-bottom: 6rem;
  background-color: var(--grayBG);
  cursor: pointer;
`;


export const PlusImg= styled.img`
  width: 1.8rem;
  height: 1.8rem;
  flex-shrink: 0;

`;

export const PreviewImg= styled.img`
  width:100%;
  height: 100%;

`;

export const SelectContainer = styled.div`
  width:100%;
  display: flex;
  flex-wrap: wrap; 
  gap: 1.2rem; 
`;

export const LimitText = styled.p`
  color: var(--funcC1);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: normal; 
  margin-top: 1.2rem;
`;

export const BtnContainer = styled.div`
  margin: 10rem 0 4rem 0;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`;
