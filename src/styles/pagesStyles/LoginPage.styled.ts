import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.form`
  margin-top: 27.3rem;
  display: flex;
  width: 100%;
  padding: 0 2rem;
  flex-direction: column;
  position: relative;
`;

export const CirclesImg = styled.img`
  position: absolute;
  top : -7rem;
  left: 9rem ; 
  width: 5rem;
  height: 6.7rem;

`;


export const LogininputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:1.6rem;
  margin: 0.8rem 0 2.4rem 0;

`;

export const SignUpContainer = styled.div`
 margin-top: 1.6rem;
 display: flex;

`;

export const SignUpLink = styled(Link)`
  color: var(--brandColor);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  margin-right: 1.2rem;
`;
export const NotMember = styled.p`
  color: var(--textC8);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  margin-right: 1.2rem;
`;

