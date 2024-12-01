import * as S from '@/styles/pagesStyles/ticketStyles/CrewItem.styled';
import { DeatilTicketCrewListProps } from '@/types/ticket';

import CapacityIcon from '@/assets/icon/navigation/마이_DeActive.png';
import { modalState } from '@/recoil/atom/addressModal';
import { useRecoilState } from 'recoil';
import CrewPopUp from './CrewPopUp';

const CrewItem = ({ crews }: { crews: DeatilTicketCrewListProps }) => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);

  return (
    <S.CrewItemContainer
      onClick={() => {
        setModalOpen(true);
      }}
    >
      <S.Image src={crews.imageUrl} />
      <S.InfoArea>
        <S.Info>
          <S.Difficulty>{crews.difficultyLevel}</S.Difficulty>
          <S.Name>{crews.crewName}</S.Name>
        </S.Info>
        <S.CapacityArea>
          <S.CapacityIcon src={CapacityIcon} />
          <S.Capacity>
            {crews.numberOfParticipants}/{crews.crewCapacity}
          </S.Capacity>
        </S.CapacityArea>
      </S.InfoArea>
      {modalOpen && <CrewPopUp crewId={crews.crewId} />}
    </S.CrewItemContainer>
  );
};

export default CrewItem;
