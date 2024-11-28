import { useState, useEffect } from 'react';
import { Ticket } from '@/types/ticket';

const useFetchTickets = (majorCategory: number, middleCategory: number) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
                Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzcG9ydGlmeTFAbmF2ZXIuY29tIiwiaWQiOjEsImF1dGgiOiJST0xFX1VTRVIiLCJ1c2VybmFtZSI6IuynleynleydtCIsInRva2VuSWQiOiIzNDg3ZDBmYS0yMWY2LTQ5YmEtYjNlNy1iYTFmYTYyYWZiNjUiLCJleHAiOjE3MzMwNjkwMDR9.mkfK0OEltL1lBWLuj4f1Rmy610sS5V8BecLr5n9ORsKfw_mEhGdyTpQb_64mMkVkXQL8CX-Wkbu2PpqBo6z6MA`, // 인증 토큰 추가
              },
            }
          );
          if (!response.ok) {
            throw new Error(`Error fetching tickets: ${response.statusText}`);
          }
          const data = await response.json();
          console.log(data.data.voucherResponses);
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

export default useFetchTickets;
