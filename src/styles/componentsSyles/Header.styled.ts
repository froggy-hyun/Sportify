import styled from "styled-components";




export const HeaderContainer = styled.div`
position: fixed;
top:0;
width: 100%;
height: 6.4rem;
background-color:  var(--white);
display: flex;
justify-content: space-between;
padding: 2rem;

`;


export const NoticeAndSearch = styled.img`
   height: 2.4rem;
   width: 2.4rem;
   flex-shrink: 0;
   &.search {
    margin-left: 2rem;

  }
`;


export const LogoImg= styled.img`
  width: 10.7rem;
  height: 2.4rem;
  flex-shrink: 0;
`;



