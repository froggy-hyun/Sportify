import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  height: fit-content;
  align-items: center;
  padding: 0 2rem;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
 
`;

export const SearchInput= styled.input`
  display: flex;
  width: 100%;
  padding: 1.2rem 1.6rem;
  height: 4.1rem;
  border-radius: 0.8rem;
  outline: 0;
  /* 배경색과 이미지 통합 */
  background: var(--grayBG) url('src/assets/icon/etc/search_Default.png') no-repeat left  center;
  background-size: 1.6rem; 
  background-position: 1.6rem center;

  padding-left: 4.3rem; 

  margin-bottom: 2.3rem;
  ::placeholder {
    font-size: 1.4rem;
    font-weight: 400;
     line-height: normal;
    color: var(--textC8);
  }
`;



export const SearchListContainer = styled.ul`
  width: 100%;
  height: fit-content;
`;

export const SearchMyItem = styled.li`
  width: 100%;
  padding : 1.6rem 0;
  height: fit-content;
  border-bottom :solid 1px var(--grayBG);
`;

export const AddressNameContainer= styled.div`
  display: flex;
  width: fit-content;
  height: 2.4rem;
  margin-bottom: 0.9rem;

`
export const MyAddressName= styled.h2<{ isCurrent: boolean }>`

font-size: 2rem;
color: ${(props) => (props.isCurrent ? 'var(--brandColor)': 'var(--textC3)')}; // 조건부 스타일 적용
font-weight: 700;
line-height: normal;
margin-right: 1.5rem;

`


export const CurrentAddressContainer= styled.div`
  display: inline-flex;
  padding: 0.4rem 1.2rem;
  justify-content: center;
  align-items: center;
  border-radius: 5.7rem;
  background: var( --brandColor);


`

export const CurrentAddress= styled.p`
color: var(--white);
font-size: 1.2rem;
font-weight: 700;
line-height: normal;


`

export const Address= styled.p`
color: var(--textC8);
font-size: 1.4rem;
font-weight: 400;
line-height: normal;
`

export const SearchResult= styled.h2`
color: var(--textC3);
font-size: 2rem;
font-weight: 700;
line-height: normal;
margin : 1.6rem 0;
`

export const SearchResultItem = styled.li`
  width: 100%;
  padding : 1.6rem 0;
  height: fit-content;
  border-top :solid 1px var(--grayBG);
`;

export const AddressName= styled.p`
color: var(--textC3);
font-size: 1.4rem;
font-weight: 400;
line-height: normal;
margin-bottom: 0.9rem;
`