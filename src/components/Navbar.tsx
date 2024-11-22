import { useState } from 'react';
import { navLinks } from '../constants/navLinks';
import { Link } from 'react-router-dom';
import * as S from '../styles/componentsSyles/Navbar.styled';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  width: 100%;
`;

const Navbar = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <S.NavContainer>
      {navLinks.map((item, index) => (
        <StyledLink to={item.path} key={item.name}>
          <S.NavItem onClick={() => setActiveIdx(index)}>
            <S.IconContainer>
              <S.NavIcon src={activeIdx === index ? item.activeImg : item.deActiveImg} />
              <S.NavName className={activeIdx === index ? 'active' : ''}> {item.name}</S.NavName>
            </S.IconContainer>
          </S.NavItem>
        </StyledLink>
      ))}
    </S.NavContainer>
  );
};

export default Navbar;
