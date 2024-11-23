import * as S from '@/styles/pagesStyles/ticketStyles/TicketList';
import { CategoryData } from '@/constants/categoryData';
import DetailCategoryTitle from './DetailCategoryTitle';

import { useRecoilValue } from 'recoil';
import { currentCategoryState } from '@/recoil/atom/category';

const TicketList = () => {
  const currentCategory = useRecoilValue(currentCategoryState);
  const detailCategory = CategoryData[currentCategory.idx]?.detailCategory || [];

  return (
    <S.TicketListContainer>

      {/* 세부 카테고리 */}
      <S.DetailCategoryList>
        <DetailCategoryTitle data={detailCategory} />
      </S.DetailCategoryList>

      {/* 티켓 이용권 */}
    </S.TicketListContainer>
  );
};

export default TicketList;
