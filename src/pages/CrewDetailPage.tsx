import { AlertBanner, Button, Title } from '@/components';
import CrewItemDetail from '@/components/crew/ CrewItemDetail';
import { crewDetailState } from '@/recoil/atom/crewDetail';
import { crewDetailApi } from '@/service/queries';
import * as S from '@/styles/pagesStyles/crewDetailStyles/CrewDetailPage.styled';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

const CrewDetailPage = () => {
  const location = useLocation();
  const crew = location.state?.crew;
  const [crewInfo, setCrewInfo] = useRecoilState(crewDetailState);

  console.log(crew);
  const { isLoading, data, isError } = useQuery({
    queryKey: ['crewDetail'],
    queryFn: () => crewDetailApi(crew.crewId),
  });

  useEffect(() => {
    if (data) {
      const newData = data.data.data.crewMembers;
      setCrewInfo(newData);
    }
  }, [data]);

  return (
    <S.CrewDetailContainer>
      <AlertBanner title={'공지사항이 없습니다.'} />
      <S.CrewDetailInfoContainer>
        <S.CrewListTitleContainer>
          <Title title="내 이웃 목록" color={true} />
          <S.CrewCount>{`${crew.numberOfParticipants}/${crew.crewCapacity}`} </S.CrewCount>
        </S.CrewListTitleContainer>
        <S.CrewListContainer>
          {crewInfo?.map((crew) => <CrewItemDetail key={crew.memberId} name={crew.name} />)}
        </S.CrewListContainer>
        <S.BtnContainer>
          <Button title="탈퇴하기" width="12.3rem" color={true} />
          <Button title="채팅하기" width="21.4rem" color={false} />
        </S.BtnContainer>
      </S.CrewDetailInfoContainer>
    </S.CrewDetailContainer>
  );
};

export default CrewDetailPage;
