import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;

  height: fit-content;
  max-width:768px;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  padding: 1.6rem 2rem;

  z-index:100;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
`;

export const HeaderUtilFrame = styled.div`
  display: flex;
`;

export const NoticeAndSearch = styled.img`
  height: 2.4rem;
  width:  2.4rem;
  display:block;

  &.search {
    margin-left: 2rem;
  }
`;

export const LogoImg = styled.img`
  width: 10.8rem;
  height: auto;
  flex-shrink: 0;
`;

export const BackImg = styled.img`
  width: 1.6rem;
  height:  1.6rem;
  flex-shrink: 0;
`;


export const Headertitle = styled.p`
 color: var(--textC3);
font-size: 1.6rem;
font-weight: 400;
line-height: normal;
`;

export const HeaderConstants = styled.div`
display: flex;
align-items: center;
gap:1.2rem;
`;