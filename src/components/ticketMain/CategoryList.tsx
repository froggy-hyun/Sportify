import * as S from '@/styles/pagesStyles/ticketStyles/CategoryList.styled';
import { useRecoilState } from 'recoil';
import { currentCategoryState } from '@/recoil/atom/category';

import { CategoryData  } from "@/constants/categoryData";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {

  const [selectedCategory, setSelectedCategory] = useRecoilState(currentCategoryState);
  
  const handleCategoryClick = (idx: number) => {
    setSelectedCategory({ title: CategoryData[idx].title, idx });
  };

  return (
    <S.CatergoryList>
      {CategoryData.map((category, idx) => (
        <CategoryItem
          key={idx}
          title={category.title}
          img={selectedCategory.idx === idx ? category.img_active : category.img}
          isSelected={selectedCategory.idx === idx}
          onClick={() => handleCategoryClick(idx)}
        />
      ))}
    </S.CatergoryList>
  );
};

export default CategoryList;
