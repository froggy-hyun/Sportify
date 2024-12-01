import { useParams } from 'react-router-dom';
import useFetchTicketsDetail from '@/service/useFetchTicketDetail';
import * as S from '@/styles/pagesStyles/ticketStyles/TicketDetailViewPage.styled';
import { useEffect, useState } from 'react';
import { Button, Divide, Title, CrewItem } from '@/components';
import CrewPopUp from '@/components/ticketMain/CrewPopUp';
import { useRecoilState } from 'recoil';
import { modalState } from '@/recoil/atom/addressModal';

const TicketDetailViewPage = () => {
  const postId = useParams().id;
  const { data } = useFetchTicketsDetail(Number(postId));
  const crewData = data?.crews || [];
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [selectedCrewId, setSelectedCrewId] = useState<number>(0);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const formatToKRW = (number: number) => {
    return Intl.NumberFormat('ko-KR').format(number);
  };

  // 모달 열기
  const handleOpenModal = (crewId: number) => {
    setSelectedCrewId(crewId);
    setModalOpen(true);
  };

  return (
    <div>
      <S.DetailConatiner>
        <S.TicketThumArea />

        {data && (
          <S.TicketDataArea>
            <S.TicketBasicDataArea>
              <S.TicketPrice>{formatToKRW(data.price)}원</S.TicketPrice>
              <S.TicketName>{data.voucherCourseName}</S.TicketName>
              <S.TicketAddress>{data.address}</S.TicketAddress>
            </S.TicketBasicDataArea>

            <S.TicketUtilDataArea>
              <S.TicketPreson>{data.requestNumberOfPerson}명이 신청했어요</S.TicketPreson>
              <S.TicketDuration>{data.duration}</S.TicketDuration>
            </S.TicketUtilDataArea>

            <Button title="신청하기" />
          </S.TicketDataArea>
        )}
      </S.DetailConatiner>

      <Divide />

      <S.DetailCrewContainer>
        <Title title="함께할 수 있는 이웃 모임" color={true}>
          <S.MoreBtn>더보기</S.MoreBtn>
        </Title>

        <S.CrewList>
          {crewData.map((crew, idx) => (
            <CrewItem key={idx} crews={crew} onClick={() => handleOpenModal(crew.crewId)} />
          ))}
        </S.CrewList>

        <Button title="내가 이웃 모아보기" outStorke></Button>
        {modalOpen && <CrewPopUp crewId={selectedCrewId} />}
      </S.DetailCrewContainer>
    </div>
  );
};

export default TicketDetailViewPage;
