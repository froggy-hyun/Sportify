import { useState, useEffect } from 'react';

interface Ticket {
  id: number;
  title: string;
  description: string;
}

const useFetchTickets = (majorCategory: number) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (majorCategory === null) return;

    // 0.3초 사이에 클릭 방지
    const timer = setTimeout(() => {
      const fetchTickets = async () => {
        try {
          setLoading(true);
          setError(null);

          const response = await fetch(
            `https://sportify.co.kr/api/sport-voucher/search?middleCategoryId=${majorCategory}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer test`,
              },
            }
          );
          if (!response.ok) {
            throw new Error(`Error fetching tickets: ${response.statusText}`);
          }
          const data = await response.json();
          setTickets(data);
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
  }, [majorCategory]);

  return { tickets, loading, error };
};

export default useFetchTickets;
