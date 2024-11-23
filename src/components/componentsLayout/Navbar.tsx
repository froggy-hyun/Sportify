import { useState } from 'react';
import { navLinks } from '@/constants/navLinks';
import * as S from '@/styles/componentsStyles/componentsLayoutStyles/Navbar.styled'

const Navbar = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <S.NavContainer>
      {navLinks.map((item, index) => (
        <S.StyledLink to={item.path} key={item.name}>
          <S.NavItem onClick={() => setActiveIdx(index)}>
            <S.IconContainer>
              <S.NavIcon src={activeIdx === index ? item.activeImg : item.deActiveImg} />
              <S.NavName className={activeIdx === index ? 'active' : ''}> {item.name}</S.NavName>
            </S.IconContainer>
          </S.NavItem>
        </S.StyledLink>
      ))}
    </S.NavContainer>
  );
};

export default Navbar;
