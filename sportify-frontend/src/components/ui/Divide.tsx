import styled from 'styled-components';

interface DivideProps {
  thin?: boolean;
  margin?: string;
}
const Divide = ({ thin = false, margin }: DivideProps) => {
  return <DivideContainer $thin={thin} $margin={margin} />;
};

export default Divide;

const DivideContainer = styled.div<{ $thin?: boolean; $margin?: string }>`
  width: 100%;
  height: ${(props) => (props.$thin ? '1px' : '1.2rem')};
  margin: ${(props) => (props.$margin ? props.$margin : 0)};
  background-color: var(--grayBG);
`;
