import * as S from '../styles/componentsSyles/Header.styled';

// Image imports
import logoImg from '../assets/icon/logo.svg';
import noticeImg from '../assets/icon/etc/notice_Default.png';
import searchImg from '../assets/icon/etc/search_Default.png';

const Header = () => {

  return (
    <S.HeaderContainer>
      <S.LogoImg src={logoImg} alt="sportify" />
      <div>
        <S.NoticeAndSearch src={searchImg} alt="검색" />
        <S.NoticeAndSearch className="search" src={noticeImg} alt="알림" />
      </div>
    </S.HeaderContainer>
  );
};

export default Header;
