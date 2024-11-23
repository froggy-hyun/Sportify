import { TrendingTickets, Location, ActiveTicketsList, MyNeighbors, Divide } from '../components';

const HomePage = () => {

  return (
    <div> 
      <Location />
      <ActiveTicketsList />
      <MyNeighbors />
      <Divide />
      <TrendingTickets />
    </div>
  );
};

export default HomePage;
