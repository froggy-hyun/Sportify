import { useEffect } from 'react';
import { Divide, Title, CrewItem, Button } from '@/components';
import * as S from '@/styles/pagesStyles/manageCrewStyles/ManageCrewPage.styled';
import { myCrewsState } from '@/recoil/atom/myCrews';
import { useRecoilState } from 'recoil';

import { useQueries } from '@/service/queries/useQueries';
import { myNeighborsApi, pastCrewsApi } from '@/service/queries';

const ManageCrewPage = () => {
  const [myCrews, setMyCrews] = useRecoilState(myCrewsState);
  // const [myPastCrews, setMyPastCrews] = useRecoilState(myPastCrewsState);

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
      // const myPastCrewData = data.myPastCrewsState.data;

      setMyCrews(myCrewData);
      // setMyPastCrews(myPastCrewData);
      console.log(myCrewData);
      // console.log(myPastCrewData);
    }
  }, [data]);

  return (
    <div>
      <S.MyCrewListContainer>
        <Title title="나의 이웃" color={true} />
        <S.MyCrewList>
          {myCrews && myCrews.length > 0 ? (
            myCrews.map((crew) => <CrewItem key={crew.crewId} crews={crew} />)
          ) : (
            <p>현재 나만의 운동 이웃이 없습니다.</p>
          )}
        </S.MyCrewList>
        <Button title="이웃 추가하기"></Button>
      </S.MyCrewListContainer>
      <Divide />
    </div>
  );
};

export default ManageCrewPage;
