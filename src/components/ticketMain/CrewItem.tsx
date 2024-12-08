import * as S from '@/styles/pagesStyles/ticketStyles/CrewItem.styled';
import { DeatilTicketCrewListProps } from '@/types/ticket';

import CapacityIcon from '@/assets/icon/navigation/마이_DeActive.png';
import CrewImage_Null from '@/assets/icon/etc/crewImage_Null.png';

const CrewItem = ({
  crews,
  onClick,
}: {
  crews: DeatilTicketCrewListProps;
  onClick: () => void;
}) => {

  const imageUrl = crews.imageUrl ?? CrewImage_Null;

  return (
    <S.CrewItemContainer onClick={onClick}>
      <S.Image src={imageUrl} />
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
