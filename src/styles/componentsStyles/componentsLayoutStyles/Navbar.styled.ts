import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.ul`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  padding: 2rem;
  align-items: center;
  display: flex;
  background-color: var(--white);
  z-index: 100;
  box-shadow: 4px 0px 12px 0px rgba(0, 0, 0, 0.08);
`;

export const StyledLink = styled(Link)`
  width: 100%;
`;

export const NavItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const NavIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  margin-bottom: 0.8rem;
`;

export const NavName = styled.p`
  color: var(--textC3);

  &.active {
    color: var(--brandColor);
  }
  
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  width: 100%;
`;
