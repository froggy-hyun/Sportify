import { Title } from '@/components';
import CategoryList from './CategoryList';

import * as S from '@/styles/pagesStyles/ticketStyles/CategoryContainer.styled';

const CategoryContainer = () => {
  return (
    <S.CategoryList>
      <Title title="카테고리" color={true}/> 
      <CategoryList />

    </S.CategoryList>
  );
};

export default CategoryContainer;
