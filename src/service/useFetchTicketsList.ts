import { useState, useEffect } from 'react';
import { Ticket } from '@/types/ticket';

const useFetchTicketsList = (majorCategory: number, middleCategory: number) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const token = localStorage.getItem("accessToken");
  
  useEffect(() => {
    if (majorCategory === null || middleCategory === null) return;

    // 0.3초 사이에 클릭 방지
    const timer = setTimeout(() => {
      const fetchTickets = async () => {
        try {
          setLoading(true);
          setError(null);

          const response = await fetch(
            `https://sportify.co.kr/api/sport-voucher/search?majorCategoryCode=${majorCategory}&middleCategoryCode=${middleCategory}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (!response.ok) {
            throw new Error(`Error fetching tickets: ${response.statusText}`);
          }
          const data = await response.json();
          setTickets(data.data.voucherResponses);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('Unknown error occurred');
          }
        } finally {
          setLoading(false);
        }
      };

      fetchTickets();
    }, 300);

    return () => clearTimeout(timer);
  }, [majorCategory, middleCategory]);

  return { tickets, loading, error };
};

export default useFetchTicketsList;
