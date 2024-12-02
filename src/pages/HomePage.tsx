import {
  activityTicketApi,
  myNeighborsApi,
  trendingChartApi,
  trendingTicketsApi,
} from '@/service/queries';
import { TrendingTickets, Location, ActiveTicketsList, MyNeighbors, Divide } from '../components';
import { useQueries } from '@/service/queries/useQueries';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { trendingTicketsState } from '@/recoil/atom/trendingTickets';
import { myCrewsState } from '@/recoil/atom/myCrews';
import { activityTicketsState } from '@/recoil/atom/activityTickets';
import { TrendingChart } from '@/components/home';
import { trendingPastState } from '@/recoil/atom/trendingPast';

const HomePage = () => {
  const setTrending = useSetRecoilState(trendingTicketsState);
  const setMyCrews = useSetRecoilState(myCrewsState);
  const setActivity = useSetRecoilState(activityTicketsState);
  const setTrendingPast = useSetRecoilState(trendingPastState);

  const { data, errorCode, isLoading } = useQueries(
    ['activityTickets', 'myNeighbors', 'trendingTickets', 'trendingPast'], // queryKey
    {
      activityTickets: activityTicketApi,
      myNeighbors: myNeighborsApi,
      trendingTickets: trendingTicketsApi,
      trendingPast: trendingChartApi,
    },
    { staleTime: 5 * 60 * 1000, cacheTime: 10 * 60 * 1000 }, // queryOptions
    [null, null, null]
  );

  useEffect(() => {
    if (data) {
      const tredingData = data.trendingTickets.data.popularVouchers;
      const myCrewData = data.myNeighbors.data.myCrews;
      const activityData = [
        ...data.activityTickets.data.personalVouchers,
        ...data.activityTickets.data.crewVouchers,
      ];
      const tredingPastData = data.trendingPast.data;

      setTrending(tredingData);
      setMyCrews(myCrewData);
      setActivity(activityData);
      setTrendingPast(tredingPastData);
    }
  }, [data]);

  return (
    <div>
      <Location />
      <ActiveTicketsList />
      <MyNeighbors />
      <Divide />
      <TrendingChart />
      <Divide />
      <TrendingTickets />
    </div>
  );
};

export default HomePage;
