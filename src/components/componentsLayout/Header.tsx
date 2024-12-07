import * as S from '@/styles/componentsStyles/componentsLayoutStyles/Header.styled';
import { useNavigate } from 'react-router-dom';
import useMyLocation from '@/hooks/useMyLocation';

// Image imports
import logoImg from '@/assets/icon/logo.svg';
import noticeImg from '@/assets/icon/etc/notice_Default.png';
import searchImg from '@/assets/icon/etc/search_Default.png';
import backImg from '@/assets/icon/etc/arrow/leftArrow_Default.png';
import myLocationImg from '@/assets/icon/etc/my_location.png';

import { headerConstants } from '@/constants/headerConstants';

const Header = () => {
  const navigate = useNavigate();
  const { searchMyAddress } = useMyLocation();

  const classifyPath = (path: string): string => {
    if (path.startsWith('/ticketItem')) return headerConstants['/ticketItem'];
    if (path.startsWith('/crewItem')) return headerConstants['/crewItem'];
    return headerConstants[location.pathname];
  };

  return (
    <>
      <S.HeaderContainer>
        {location.pathname === '/' || location.pathname === '/ticket' ? (
          <S.LogoImg src={logoImg} alt="sportify" onClick={() => navigate('/')} />
        ) : (
          <S.HeaderConstants>
            <S.BackImg src={backImg} alt="뒤로가기" onClick={() => navigate(-1)} />
            <S.Headertitle>{classifyPath(location.pathname)}</S.Headertitle>
          </S.HeaderConstants>
        )}
        <div>
          {location.pathname === '/addressSearch' ? (
            <S.NoticeAndSearch src={myLocationImg} alt="내위치" onClick={searchMyAddress} />
          ) : (
            <S.HeaderUtilFrame>
              <S.NoticeAndSearch src={searchImg} alt="검색" />
              <S.NoticeAndSearch className="search" src={noticeImg} alt="알림" />
            </S.HeaderUtilFrame>
          )}
        </div>
      </S.HeaderContainer>
    </>
  );
};

export default Header;
