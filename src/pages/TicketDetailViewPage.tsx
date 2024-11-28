import { TicketCompItemProps } from '@/types/ticket';
import { useEffect } from 'react';

const TicketDetailViewPage = ( data : TicketCompItemProps) => {

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
     <div>{data}세부 이용권 정보 페이지</div>;
    </>
  
  )
 
};

export default TicketDetailViewPage;
