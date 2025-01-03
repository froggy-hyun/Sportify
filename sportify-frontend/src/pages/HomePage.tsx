import {
  activityTicketApi,
  myNeighborsApi,
  trendingChartApi,
  trendingTicketsApi,
} from '@/service/queries';
import { TrendingTickets, Location, ActiveTicketsList, MyNeighbors, Divide } from '../components';
import { useQueries } from '@/service/queries/useQueries';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { trendingTicketsState } from '@/recoil/atom/trendingTickets';
import { myCrewsState } from '@/recoil/atom/myCrews';
import { activityTicketsState } from '@/recoil/atom/activityTickets';
import HomePopUp from '@/components/home/HomePopUp';
import { modalState } from '@/recoil/atom/addressModal';
import { TicketVideo, TrendingChart } from '@/components/home';
import { trendingPastState } from '@/recoil/atom/trendingPast';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const setTrending = useSetRecoilState(trendingTicketsState);
  const setMyCrews = useSetRecoilState(myCrewsState);
  const setActivity = useSetRecoilState(activityTicketsState);
  const setTrendingPast = useSetRecoilState(trendingPastState);

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useRecoilState(modalState);

  // const HOME_VISITED = Number(localStorage.getItem('homeVisited'));

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

  if (errorCode[0]?.data?.code === 400) {
    alert('로그인이 만료되었습니다. 다시 로그인 해주세요.');
    navigate('/login');
    location.reload();
  }

  useEffect(() => {
    if (data) {
      console.log(data);
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

  // useEffect(() => {
  //   const today = Number(new Date());
  //   const handlePopUp = () => {
  //     if (HOME_VISITED && HOME_VISITED > today) {
  //       return;
  //     }
  //     if (HOME_VISITED || HOME_VISITED < today) {
  //       setModalOpen(true);
  //     }
  //   };
  //   window.setTimeout(handlePopUp, 1000); //1초뒤 실행
  // }, [HOME_VISITED]);

  useEffect(() => {
    const homeModal = sessionStorage.getItem('homeModal');
    if (homeModal) {
      return;
    } else {
      setModalOpen(true);
      sessionStorage.setItem('homeModal', 'true');
    }
    setModalOpen(true);
  }, []);

  return (
    <div>
      {modalOpen && <HomePopUp />}
      <Location />
      <ActiveTicketsList />
      <MyNeighbors />
      <Divide />
      <TicketVideo />
      <Divide />
      <TrendingChart />
      <Divide />
      <TrendingTickets />
    </div>
  );
};

export default HomePage;
