import { activityTicketApi, myNeighborsApi, trendingTicketsApi } from '@/service/queries';
import { TrendingTickets, Location, ActiveTicketsList, MyNeighbors, Divide } from '../components';
import { useQueries } from '@/service/queries/useQueries';

const HomePage = () => {
  const { data, errorCode, isLoading } = useQueries(
    ['activityTickets', 'myNeighbors', 'trendingTickets'], // queryKey
    {
      activityTickets: activityTicketApi,
      myNeighbors: myNeighborsApi,
      trendingTickets: trendingTicketsApi,
    },
    { staleTime: 5 * 60 * 1000, cacheTime: 10 * 60 * 1000 }, // queryOptions
    [null, null, null] // params (각 API에 필요한 파라미터)
  );

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
