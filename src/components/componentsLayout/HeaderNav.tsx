import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';

const HeaderNav = () => {
  const token = localStorage.getItem('accessToken');
  const location = useLocation();

  const showHeaderAndNavbar =
    (location.pathname === '/' && token) ||
    location.pathname.startsWith('/ticket') ||
    location.pathname.startsWith('/manageCrew') ||
    location.pathname.startsWith('/my');

  return (
    <>
      {showHeaderAndNavbar && (
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
