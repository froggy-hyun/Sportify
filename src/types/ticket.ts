export interface TicketItemType {
  title :string,
  address: string,
  start : string,
  end: string,
  tags? :string[]
}

// Ticket List
export interface Ticket {
  address: string;
  voucherCourseName: string;
  requestNumberOfPerson: number;
}

export type TicketStatus = 'trending' | 'active';

