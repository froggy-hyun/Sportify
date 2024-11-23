import styled from 'styled-components';

interface DetailCategoryProps {
  data: string[];
}

const DetailCategoryTitle = ({ data }: DetailCategoryProps) => {
  return (
    <Wrapper>
      {data.map((item, idx) => (
        <Title key={idx}>{item}</Title>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap:2.4rem;
  white-space: nowrap;
`;

const Title = styled.button`
  width:fit-content;
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--textC8);

  background:none;
`;

export default DetailCategoryTitle;
