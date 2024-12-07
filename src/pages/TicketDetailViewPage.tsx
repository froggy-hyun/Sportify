import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from '@/styles/pagesStyles/ticketStyles/TicketDetailViewPage.styled';
import useFetchTicketsDetail from '@/service/useFetchTicketDetail';

import { useRecoilState } from 'recoil';
import { modalState } from '@/recoil/atom/addressModal';

import { Button, Divide, Title, CrewItem } from '@/components';
import CrewPopUp from '@/components/ticketMain/CrewPopUp';

import PeopleImage from '@/assets/icon/navigation/마이_DeActive.png';
import DateImage from '@/assets/icon/etc/period_Default.png';

const TicketDetailViewPage = () => {
  const postId = useParams().id;
  const { data } = useFetchTicketsDetail(Number(postId));
  const crewData = data?.crews || [];
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [selectedCrewId, setSelectedCrewId] = useState<number>(0);
  const navigate = useNavigate();

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
        {data && (
          <>
            <S.TicketThumArea>
              <S.TicketImg src={data?.subCategoryImageUrl} alt="ticket" />
            </S.TicketThumArea>
            <S.TicketDataArea>
              <S.TicketData>
                <S.TicketBasicDataArea>
                  <S.TicketPrice>{formatToKRW(data.price)}원</S.TicketPrice>
                  <S.TicketName>{data.voucherCourseName}</S.TicketName>
                  <S.TicketAddress>{data.address}</S.TicketAddress>
                </S.TicketBasicDataArea>

                <S.UtilInfo>
                  <S.DetailArea>
                    <S.IconImage src={PeopleImage} alt="person" />
                    <S.People>
                      <S.Highlights>{data.requestNumberOfPerson}명</S.Highlights>이 신청했어요
                    </S.People>
                  </S.DetailArea>

                  <S.DetailArea>
                    <S.IconImage src={DateImage} alt="person" />
                    <S.Date>{data.duration}</S.Date>
                  </S.DetailArea>
                </S.UtilInfo>
              </S.TicketData>

              <Button title="이용권 신청하기" onClick={() => {alert('프로토타입에서는 제공하지 않는 기능입니다.')}} />
            </S.TicketDataArea>
          </>
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

        <Button
          title="내가 이웃 모아보기"
          outStorke
          onClick={() => {
            navigate('/createCrew/' + postId);
          }}
        ></Button>
        {modalOpen && <CrewPopUp crewId={selectedCrewId} />}
      </S.DetailCrewContainer>
    </div>
  );
};

export default TicketDetailViewPage;
