import * as S from '@/styles/pagesStyles/ticketStyles/CategoryItem.styled';

interface CategoryItemProps {
  title: string;
  img: string;
}

const CategoryItem = ({ title, img }: CategoryItemProps) => {
  return (
    <S.CategroyItemContainer>
      <S.CategoryImgArea>
        <S.CategoryImg src={img} alt="카테고리 이미지" />
      </S.CategoryImgArea>
      <S.CategoryTitle>{title}</S.CategoryTitle>
    </S.CategroyItemContainer>
  );
};

export default CategoryItem;
