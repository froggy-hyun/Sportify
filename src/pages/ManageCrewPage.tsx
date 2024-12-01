import { useEffect } from 'react';
import { Divide, Title } from '@/components';
import * as S from '@/styles/pagesStyles/manageCrewStyles/ManageCrewPage.styled';
import { myCrewsState, myPastCrewsState } from '@/recoil/atom/myCrews';
import { useSetRecoilState } from 'recoil';

import { useQueries } from '@/service/queries/useQueries';
import { myNeighborsApi, pastCrewsApi } from '@/service/queries';

const ManageCrewPage = () => {
  const setMyCrews = useSetRecoilState(myCrewsState);
  const setMyPastCrews = useSetRecoilState(myPastCrewsState);

  const { data } = useQueries(
    ['myNeighbors', 'myPastCrewsState'], // queryKey
    {
      myNeighbors: myNeighborsApi,
      myPastCrewsState: pastCrewsApi,
    },
    { staleTime: 5 * 60 * 1000, cacheTime: 10 * 60 * 1000 }, // queryOptions
    [null, null]
  );

  useEffect(() => {
    if (data) {
      const myCrewData = data.myNeighbors.data.myCrews;
      const myPastCrewData = data.myPastCrewsState.data;

      setMyCrews(myCrewData);
      setMyPastCrews(myPastCrewData);
      console.log(myCrewData);
      console.log(myPastCrewData);
    }
  }, [data]);

  return (
    <div>
      <S.MyCrewListContainer>
        <Title title="이웃 관리" color={true} />
        {/* <S.MyCrewList>
          {myCrews && myCrews.length > 0 ? (
            myCrews.map((crew) => <CrewItem key={crew.crewId} crews={crew} />)
          ) : (
            <p>현재 나만의 운동 이웃이 없습니다.</p>
          )}
        </S.MyCrewList> */}
      </S.MyCrewListContainer>
      <Divide />
    </div>
  );
};

export default ManageCrewPage;
