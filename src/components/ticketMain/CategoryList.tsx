import * as S from '@/styles/pagesStyles/ticketStyles/CategoryList.styled';

import { CategoryData  } from "@/constants/categoryData";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  return (
      <S.CatergoryList>
        {CategoryData.map((category, idx) => (
          <CategoryItem key={idx} title={category.title} img={category.img}/>
        ))}
      </S.CatergoryList>
  );
};

export default CategoryList;
