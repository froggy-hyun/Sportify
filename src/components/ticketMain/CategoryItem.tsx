import * as S from '@/styles/pagesStyles/ticketStyles/CategoryItem.styled';

interface CategoryItemProps {
  title: string;
  img: string;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryItem = ({ title, img, isSelected, onClick }: CategoryItemProps) => {
  
  return (
    <S.CategroyItemContainer onClick={onClick}>
      <S.CategoryImgArea isSelected={isSelected}>
        <S.CategoryImg src={img} alt="카테고리 이미지" />
      </S.CategoryImgArea>
      
      <S.CategoryTitle>{title}</S.CategoryTitle>
    </S.CategroyItemContainer>
  );
};

export default CategoryItem;
