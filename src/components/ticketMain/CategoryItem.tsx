import * as S from '@/styles/pagesStyles/ticketStyles/CategoryItem.styled';

interface CategoryItemProps {
  title: string;
  img: string;
}

const CategoryItem = ({ title, img }: CategoryItemProps) => {
  return (
    <S.CategroyItemContainer>
      <S.CategoryImg src={img} alt="바로가기" />
      <S.CategoryTitle>{title}</S.CategoryTitle>
    </S.CategroyItemContainer>
  );
};

export default CategoryItem;
