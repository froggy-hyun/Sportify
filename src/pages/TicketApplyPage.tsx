import { Location, AlertBanner, CategoryContainer, Divide, TicketList } from '../components';

const TicketApplyPage = () => {

  return (
    <div>
      <Location />
      <AlertBanner />
      <CategoryContainer />
      <Divide />

      {/* 티켓 카테고리 구현 */}
      <TicketList />

    </div>
  );
};

export default TicketApplyPage;
