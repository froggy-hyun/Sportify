import { Location, AlertBanner, CategoryContainer, Divide, TicketList } from '../components';

const TicketApplyPage = () => {
  return (
    <div>
      <Location />
      <AlertBanner title={'현재 위치의 주변 이용권을 우선적으로 표시합니다.'} />

      {/* 티켓 카테고리 구현 */}
      <CategoryContainer />
      <Divide />
      <TicketList />
    </div>
  );
};

export default TicketApplyPage;
