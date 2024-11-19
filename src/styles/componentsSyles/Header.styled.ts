import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;

  height: fit-content;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

export const NoticeAndSearch = styled.img`
  height: 2.4rem;
  width: fit-content;
  flex-shrink: 0;

  &.search {
    margin-left: 2rem;
  }
`;

export const LogoImg = styled.img`
  width: 10.8rem;
  height: auto;
  flex-shrink: 0;
`;
