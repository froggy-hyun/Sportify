import styled from 'styled-components';
import { useEffect, useState } from 'react';

interface DetailCategoryProps {
  data: string[];
  onMiddleCategoryClick: (idx: number) => void;
}

const DetailCategoryTitle = ({ data, onMiddleCategoryClick }: DetailCategoryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [data]);

  const handleClick = (idx: number) => {
    if (activeIndex !== idx) {
      setActiveIndex(idx);
      onMiddleCategoryClick(idx);
    }
  };

  return (
    <Wrapper>
      {data.map((item, idx) => (
        <Title key={idx} isActive={activeIndex === idx} onClick={() => handleClick(idx)}>
          {item}
        </Title>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 2.4rem;
  white-space: nowrap;
`;

const Title = styled.button<{ isActive: boolean }>`
  width: fit-content;
  font-size: 1.8rem;
  font-weight: ${({ isActive }) => (isActive ? '700' : '400')};
  color: ${({ isActive }) => (isActive ? 'var(--brandColor)' : 'var(--textC8)')};

  background: none;
`;

export default DetailCategoryTitle;
