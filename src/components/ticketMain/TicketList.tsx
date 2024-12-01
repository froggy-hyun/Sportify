import * as S from '@/styles/pagesStyles/ticketStyles/TicketList';

import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentCategoryState } from '@/recoil/atom/category';
import useFetchTicketsList from '@/service/useFetchTicketsList';

import { CategoryData } from '@/constants/categoryData';
import DetailCategoryTitle from './DetailCategoryTitle';
import TicketCompItem from './TicketCompItem';

const TicketList = () => {
  const navigate = useNavigate();

  // 현재 카테고리(대-중) 상태 관리
  const currentCategory = useRecoilValue(currentCategoryState);
  const setMiddleCategory = useSetRecoilState(currentCategoryState); // DetailCategoryTitle로 받아온 세부 카테고리 idx 상태관리 -> recoil 최신화
  const majorCategory = CategoryData[currentCategory.majorCategory_idx]?.detailCategory || []; // 대분류 -> 하위 전달

  // 이용권 데이터 불러오기
  const { tickets } = useFetchTicketsList(
    currentCategory.majorCategory_idx,
    currentCategory.middleCategory_idx
  );

  const handleMiddleCategoryClick = (idx: number) => {
    setMiddleCategory({
      ...currentCategory,
      middleCategory_idx: idx,
    });
  };

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
      <TicketCompItem
        data={tickets}
        onClickItem={(e) => {
          navigate('/ticketItem/' + e.voucherId);
        }}
      />
    </S.TicketListContainer>
  );
};

export default TicketList;
