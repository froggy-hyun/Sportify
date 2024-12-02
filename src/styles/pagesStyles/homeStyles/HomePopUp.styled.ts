import styled from 'styled-components';

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 0.8rem;
`;


export const InfoContainer = styled.div`
  margin: 2.4rem 0 5rem 0 ;
`;

export const Info = styled.p<{$color : boolean}>`
  color: ${({ $color }) => ($color ? "var(--brandColor)" : "var(--textC3)")};
  font-weight: ${({ $color }) => ($color ? 700 : 400)};
  font-size: 1.4rem;
  display: flex;
`;


export const BtnContainer = styled.div`
  width:100%;
  height:4.1rem;
  display: flex;
  justify-content: space-between;
  
`;

export const CheckContainer = styled.div`
  display: flex;
  margin-top: 1.6rem;
  align-items: center;
`;

export const CheckExplain = styled.p`
   color: var(--textC3);
  font-size: 1.3rem;
  margin-left: 0.3rem;
`;




export const CheckBox = styled.input`
  width:  1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #CCC;
  background: #FFF;
  margin-right: 0.6rem;
`;
