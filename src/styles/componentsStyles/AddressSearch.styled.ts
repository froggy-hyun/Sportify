import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  align-items: center;
  padding: 2rem 2rem 6rem 2rem;
  display: flex;
  flex-direction: column;
`;

export const SearchListContainer = styled.ul`
  width: 100%;
  height: fit-content;
  margin-top: 4rem;
`;

export const SearchMyItem = styled.li`
  width: 100%;
  padding: 2rem 0;
  height: fit-content;
  border-bottom: solid 1px var(--grayBG);

  &:first-child {
    padding-top:0px;
  }
`;

export const AddressNameContainer = styled.div`
  display: flex;
  width: fit-content;
`;
export const MyAddressName = styled.h2<{ isCurrent: boolean }>`
  font-size: 1.8rem;
  color: ${(props) =>
    props.isCurrent ? 'var(--brandColor)' : 'var(--textC3)'}; // 조건부 스타일 적용
  font-weight: 700;
  margin: 0px 8px 4px 0px;
`;

export const CurrentAddressContainer = styled.div`
  display: inline-flex;
  height: fit-content;
  padding: 0.4rem 1.2rem;
  justify-content: center;
  align-items: center;
  border-radius: 5.7rem;
  background: var(--brandColor);
`;

export const CurrentAddress = styled.p`
  color: var(--white);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: normal;
`;

export const SearchResult = styled.h2`
  color: var(--textC3);
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const SearchItemContainer = styled.ul`
  width: 100%;
  height: fit-content;
`;

export const SearchResultItem = styled.li`
  width: 100%;
  padding: 2rem 0;
  height: fit-content;
  border-top: solid 1px var(--grayBG);
`;

export const AddressName = styled.p`
  color: var(--textC3);
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 4px;
`;

export const Address = styled.p`
  color: var(--textC8);
  font-size: 1.4rem;
  font-weight: 400;
`;
