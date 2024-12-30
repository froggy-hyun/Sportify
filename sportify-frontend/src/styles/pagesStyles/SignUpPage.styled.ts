import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height:100vh;

  padding: 0px 2rem;
  flex-direction: column;
`;

export const CirclesImg = styled.img`
  position: absolute;
  width:34px;
  top: 60px;
  left: 116.8px;
  transform:translateY(-100%);
`;

export const SignUpInfoContainer = styled.form`
  display: flex;
  flex-direction: column;
`;  

export const LabelFrame = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const SubTitle = styled.p`
  color: var(--funcC1);
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1.2rem;
  margin-left:16px;
`;

export const ButtonContainer = styled.div`
margin-top:10rem;
`;

export const DisabledContainer = styled.div`
  display: flex;
  align-items:flex-end;
`;

export const StyledLink = styled(Link)`
  display:block;
  text-align:center;
  margin-top:16px;

  font-size:1.4rem;
  font-weight: 400;
  color: var(--textC8);
`;