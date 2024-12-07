import { navLinks } from '@/constants/navLinks';
import * as S from '@/styles/componentsStyles/componentsLayoutStyles/Navbar.styled';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <S.NavContainer>
      {navLinks.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <S.StyledLink to={item.path} key={item.name}>
            <S.NavItem>
              <S.IconContainer>
                <S.NavIcon src={isActive ? item.activeImg : item.deActiveImg} />
                <S.NavName className={isActive ? 'active' : ''}> {item.name}</S.NavName>
              </S.IconContainer>
            </S.NavItem>
          </S.StyledLink>
        );
      })}
    </S.NavContainer>
  );
};

export default Navbar;
