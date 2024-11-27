import { Location, AlertBanner, CategoryContainer, Divide, TicketList } from '../components';

const TicketApplyPage = () => {

  return (
    <div>
      <Location />
      <AlertBanner />

      {/* 티켓 카테고리 구현 */}
      <CategoryContainer />
      <Divide />
      <TicketList />

    </div>
  );
};

export default TicketApplyPage;
