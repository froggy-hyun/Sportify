import { useState } from 'react';
import { navLinks } from '../constants/navLinks';
import { Link } from 'react-router-dom';
import * as S from '../styles/componentsSyles/Navbar.styled';

const Navbar = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  
  return (
    <S.NavContainer>
      {navLinks.map((item, index) => (
        <S.NavItem onClick={() => setActiveIdx(index)} key={item.name}>
          <Link to={item.path}>
            <S.IconContainer>
              <S.NavIcon src={activeIdx === index ? item.activeImg : item.deActiveImg} />
              <S.NavName className={activeIdx === index ? 'active' : ''}> {item.name}</S.NavName>
            </S.IconContainer>
          </Link>
        </S.NavItem>
      ))}
    </S.NavContainer>
  );
};

export default Navbar;
