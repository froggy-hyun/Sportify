import styled from 'styled-components';

interface isLastProps {
  isLast: boolean;
}

export const RulesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
`;

export const RuleItem = styled.div`
  width: 100%;
  padding: 1.6rem 1.2rem;
  border-radius: 8px;
  background: var(--grayBG);
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const RuleItemInput = styled.input<isLastProps>`
  width: 30rem;
  height: 100%;
  background: var(--grayBG);
  outline: 0;
  color: ${(props) => (props.isLast ? 'var(--black)' : 'var(--textC8)')};

  ::placeholder {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;
    color: var(--textC3);
  }
`;

export const DeletePlusBtn = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
`;
