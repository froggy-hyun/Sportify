import { activityTicketApi, myNeighborsApi, trendingTicketsApi } from '@/service/queries';
import { TrendingTickets, Location, ActiveTicketsList, MyNeighbors, Divide } from '../components';
import { useQueries } from '@/service/queries/useQueries';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { trendingTicketsState } from '@/recoil/atom/trendingTickets';
import { myCrewsState } from '@/recoil/atom/myCrews';
import { activityTicketsState } from '@/recoil/atom/activityTickets';
import HomePopUp from '@/components/home/HomePopUp';
import { modalState } from '@/recoil/atom/addressModal';

const HomePage = () => {
  const setTrending = useSetRecoilState(trendingTicketsState);
  const setMyCrews = useSetRecoilState(myCrewsState);
  const setActivity = useSetRecoilState(activityTicketsState);
  const [modalOpen, setModalOpen] = useRecoilState(modalState);

  const HOME_VISITED = Number(localStorage.getItem('homeVisited'));
  const { data, errorCode, isLoading } = useQueries(
    ['activityTickets', 'myNeighbors', 'trendingTickets'], // queryKey
    {
      activityTickets: activityTicketApi,
      myNeighbors: myNeighborsApi,
      trendingTickets: trendingTicketsApi,
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
      setTrending(tredingData);
      setMyCrews(myCrewData);
      setActivity(activityData);
    }
  }, [data]);

  useEffect(() => {
    const today = Number(new Date());
    const handlePopUp = () => {
      if (HOME_VISITED && HOME_VISITED > today) {
        return;
      }
      if (HOME_VISITED || HOME_VISITED < today) {
        setModalOpen(true);
      }
    };
    window.setTimeout(handlePopUp, 1000); //1초뒤 실행
  }, [HOME_VISITED]);

  return (
    <div>
      {modalOpen && <HomePopUp />}
      <Location />
      <ActiveTicketsList />
      <MyNeighbors />
      <Divide />
      <TrendingTickets />
    </div>
  );
};

export default HomePage;
