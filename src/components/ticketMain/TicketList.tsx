import * as S from '@/styles/pagesStyles/ticketStyles/TicketList';

import { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { currentCategoryState } from '@/recoil/atom/category';
import useFetchTickets from '@/hooks/useFetchTickets';

import { CategoryData } from '@/constants/categoryData';
import DetailCategoryTitle from './DetailCategoryTitle';

const TicketList = () => {
  // 현재 카테고리(대-중) 상태 관리
  const currentCategory = useRecoilValue(currentCategoryState);
  const [middleCategory, setMiddleCategory] = useRecoilState(currentCategoryState); // DetailCategoryTitle로 받아온 세부 카테고리 idx 상태관리 -> recoil 최신화
  const majorCategory = CategoryData[currentCategory.majorCategory_idx]?.detailCategory || []; // 대분류 -> 하위 전달

  // 이용권 데이터 불러오기
  const { loading, error } = useFetchTickets(currentCategory.majorCategory_idx);

  const handleMiddleCategoryClick = (idx: number) => {
    setMiddleCategory({
      ...currentCategory,
      middleCategory_idx: idx,
    });
  };

  useEffect(() => {
    console.log('middleCategory', middleCategory.middleCategory_idx);
  }, [middleCategory.middleCategory_idx]);

  return (
    <S.TicketListContainer>
      {/* 세부 카테고리 */}
      <S.DetailCategoryList>
        <DetailCategoryTitle
          data={majorCategory}
          onMiddleCategoryClick={handleMiddleCategoryClick}
        />
      </S.DetailCategoryList>

      {/* 티켓 이용권 */}
      {/* <p>{tickets}</p> */}
      <p>{loading}</p>
      <p>{error}</p>
    </S.TicketListContainer>
  );
};

export default TicketList;
