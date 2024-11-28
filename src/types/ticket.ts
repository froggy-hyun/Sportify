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
}

export interface TicketCompItemProps {
  data: Ticket[];
  onClickItem: (e: Ticket) => void;
}

export type TicketStatus = 'trending' | 'active';

