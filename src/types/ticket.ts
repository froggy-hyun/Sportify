export interface TicketItemType {
  title :string,
  address: string,
  start : string,
  end: string,
  tags? :string[]
}

// Ticket List
export interface Ticket {
  voucherId: number;
  address: string;
  voucherCourseName: string;
  requestNumberOfPerson: number;
  duration: string;
  price: number;
  crews: DeatilTicketCrewListProps[];
}

export interface DeatilTicketCrewListProps {
  crewName: string;
  imageUrl: string;
  difficultyLevel: string;
  numberOfParticipants: number;
  crewCapacity: number;
};

export interface TicketCompItemProps {
  data: Ticket[];
  onClickItem: (e: Ticket) => void;
}

export type TicketStatus = 'trending' | 'active';

