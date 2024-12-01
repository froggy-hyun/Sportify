import * as S from '@/styles/pagesStyles/ticketStyles/CrewItem.styled';
import { DeatilTicketCrewListProps } from '@/types/ticket';

import CapacityIcon from '@/assets/icon/navigation/마이_DeActive.png';

const CrewItem = ({
  crews,
  onClick,
}: {
  crews: DeatilTicketCrewListProps;
  onClick: () => void;
}) => {
  return (
    <S.CrewItemContainer onClick={onClick}>
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
    </S.CrewItemContainer>
  );
};

export default CrewItem;
