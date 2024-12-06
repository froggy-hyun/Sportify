import styled from 'styled-components';

export const DifficultyLevel = styled.p`
  color: var(--funcC1);
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 4px;
`;

export const NameAndParticipantsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CrewName = styled.h1`
  color: var(--textC3);
  font-size: 2rem;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 8px;
`;

export const ParticipantsImg = styled.img`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  margin-right: 4px;
`;

export const Participants = styled.p`
  color: var(--textC3);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
`;

export const TitleContainer = styled.div`
  width: 100%;
  margin:2.4rem 0 1.2rem 0;
`;

export const InfoTitle = styled.p<{ $color: boolean }>`
  color: ${({ $color }) => ($color ? "var(--brandColor)" : "var(--textC3)")};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: normal;
  display: flex;
`;

export const Item = styled.div`
  display: flex;
  padding: 0.8rem 1.6rem;
  color:var(--textC3);
  justify-content: center;
  align-items: center;
  border-radius: 10rem;
  background-color: var(--grayBG);

  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
`;

export const ItemContainer = styled.div`
  width:100%;
  display: flex;
  flex-wrap: wrap; 
  gap: 1.2rem; 
  margin-bottom: 8px ;
`;

export const RuleContainer = styled.div`
  width: 100%;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 8px;  
  padding: 1.2rem 1.6rem;
  display: flex;
  flex-direction : column;
  background-color: var(--grayBG);
  margin-bottom: 2.4rem;
  gap:8px;
`;

export const CheckImg = styled.img`
  width:2rem;
  height: 2rem;
  flex-shrink: 0;
  margin-right: 8px;
`;

export const Rule = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  color:var(--textC3);
`;

export const CheckBox = styled.input`
  width:  1.6rem;
  height: 1.6rem;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #CCC;
  background: #FFF;
  margin-right: 8px;
`;

export const CheckContainer = styled.div`
  width:100%;
  justify-content: end;
  display: flex;
  margin-top:1.6rem;
`;

export const BtnContainer = styled.div`
  width:100%;
  display: flex;
  margin-top:6rem;
  justify-content: space-between;
`;



