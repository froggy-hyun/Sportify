import { TrendingTickets, Location, ActiveTicketsList, MyNeighbors } from '../components';

const HomePage = () => {

  return (
    <div> 
      <Location />
      <ActiveTicketsList />
      <MyNeighbors />
      <TrendingTickets />
    </div>
  );
};

export default HomePage;
