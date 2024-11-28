import * as S from '@/styles/pagesStyles/ticketStyles/CategoryList.styled';
import { useRecoilState } from 'recoil';
import { currentCategoryState } from '@/recoil/atom/category';

import { CategoryData  } from "@/constants/categoryData";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {

  const [selectedCategory, setSelectedCategory] = useRecoilState(currentCategoryState);
  
  const handleCategoryClick = (idx: number) => {
    setSelectedCategory({ title: CategoryData[idx].title, majorCategory_idx: idx, middleCategory_idx: 0 });
  };

  return (
    <S.CatergoryList>
      {CategoryData.map((category, idx) => (
        <CategoryItem
          key={idx}
          title={category.title}
          img={selectedCategory.majorCategory_idx === idx ? category.img_active : category.img}
          isSelected={selectedCategory.majorCategory_idx === idx}
          onClick={() => handleCategoryClick(idx)}
        />
      ))}
    </S.CatergoryList>
  );
};

export default CategoryList;
