import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';

const HeaderNav = () => {
  const token = localStorage.getItem('accessToken');
  const location = useLocation();

  const HeaderNavbarPath =
    (location.pathname === '/' && token) ||
    location.pathname.startsWith('/ticket') ||
    location.pathname.startsWith('/manageCrew') ||
    location.pathname.startsWith('/my');

  useEffect(() => {
    if (HeaderNavbarPath) {
      document.body.style.margin = '6.7rem 0 8.88rem 0';
    } else {
      document.body.style.margin = '0';
    }
    return () => {
      document.body.style.margin = '';
    };
  }, [HeaderNavbarPath]);

  return (
    <>
      {HeaderNavbarPath && (
        <>
          <Header />
          <Navbar />
        </>
      )}
      <Outlet />
    </>
  );
};

export default HeaderNav;
