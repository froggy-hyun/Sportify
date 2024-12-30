import { useState, useEffect } from 'react';
import { Ticket } from '@/types/ticket';

const useFetchTicketsDetail = (postId: number) => {
  const [data, setData] = useState<Ticket | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchTicketDetails = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://sportify.co.kr/api/sport-voucher/${postId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`, // 인증 토큰 추가
            },
          }
        );
        if (!response.ok) {
            throw new Error(`Error fetching tickets details: ${response.statusText}`);
        }

        const data = await response.json();
        setData(data.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unknown error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchTicketDetails();
  }, [postId]);

  return { data, isLoading, error };
};

export default useFetchTicketsDetail;
