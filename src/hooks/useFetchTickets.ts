import { useState, useEffect } from 'react';

interface Ticket {
  id: number;
  title: string;
  description: string;
}

const useFetchTickets = (majorCategory: number) => {
  const [tickets, setTickets] = useState<Ticket>();
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
            `https://sportify.co.kr/api/sport-voucher/search?middleCategoryId=${majorCategory + 1}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzcG9ydGlmeTFAbmF2ZXIuY29tIiwiaWQiOjEsImF1dGgiOiJST0xFX1VTRVIiLCJ1c2VybmFtZSI6IuynleynleydtCIsInRva2VuSWQiOiI3NGJmZTFhNS1lMGFlLTRhY2UtYjZlZS1iOGUyNTBjOWZlOTQiLCJleHAiOjE3MzMwMzM0NTF9.6zUtQe-BPMrf8jqdwhgqk5duyq2pH9aJ8DVYp_y9F-H0By7uykLInbBPYG0VbB8KTujfgBYCJTckSn6DbXTJ5g`, // 인증 토큰 추가
              },
            }
          );
          if (!response.ok) {
            throw new Error(`Error fetching tickets: ${response.statusText}`);
          }
          const data = await response.json();
          console.log(data);
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
