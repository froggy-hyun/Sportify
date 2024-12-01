import styled from 'styled-components';


export const Title = styled.h1`
  color: var(--textC3);
  font-size: 2rem;
  font-weight: 700;
  line-height: normal;
  padding: 4.8rem 0 0.8rem 0;
  border-bottom: solid 1px var(--grayBG);

`;

export const Name = styled.h2`
  margin : 2.4rem 0 1.2rem 0;
  color: var(--textC3);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: normal;
`;


export const BtnContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  margin: 6rem 0 4rem 0 ;
`;

export const nextTimeBtn= styled.button`
  display: flex;
  width: 12.3rem;
  padding: 1.2rem 0;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  background: var(--grayBG);


  color: var(--textC8);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;


`;

export const changeBtn= styled.button`
  display: flex;
  width: 21.4rem;
  padding: 1.2rem 0;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  background: var(--brandColor);

  color: var(--white);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: normal;
`;