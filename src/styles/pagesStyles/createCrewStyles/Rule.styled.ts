import styled from 'styled-components';

interface isLastProps {
  isLast : boolean
}



export const RulesContainer= styled.div`
  width: 100%;
  height: 15.6rem;
  display: flex;
  flex-direction: column;

`;

export const RuleItem= styled.div`
 width: 100%;
  height: 4.4rem;
  padding: 1.4rem 1.2rem ;
  border-radius: 0.8rem;
  background: var(--grayBG);
  display: flex;
  justify-content: space-between;
  margin-bottom : 1.2rem;


`;

export const RuleItemInput= styled.input<isLastProps>`
  width:30rem;
  height:100%;
  background: var(--grayBG);
  outline: 0;
  color:  ${(props) => (props.isLast ?  "var(--black)" : "var(--textC8)")};;

  ::placeholder {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;
    color: var(--textC3);

  }
`;




export const DeletePlusBtn= styled.img`
  width:  1.7rem;
  height: 1.7rem;
  cursor: pointer;

`;