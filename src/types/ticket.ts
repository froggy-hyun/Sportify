export interface TicketItemType {
  title :string,
  address: string,
  start : string,
  end: string,
  tags? :string[]
}

export type TicketStatus = 'trending' | 'active';