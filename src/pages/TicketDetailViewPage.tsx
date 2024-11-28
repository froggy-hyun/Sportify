import { useParams } from 'react-router-dom';
import useFetchTicketsDetail from '@/hooks/useFetchTicketDetail';

const TicketDetailViewPage = () => {
  const postId = useParams().id;
  const { data } = useFetchTicketsDetail(Number(postId));

  return (
    <>
      {data && (
        <div>
          <h1>{data.address}</h1>
          <h2>{data.duration}</h2>
        </div>
      )}
    </>
  );
};

export default TicketDetailViewPage;
