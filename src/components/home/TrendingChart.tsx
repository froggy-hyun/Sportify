import React, { useEffect, useRef } from 'react';
import { Chart, registerables, ChartData, ChartOptions, plugins } from 'chart.js';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { trendingPastChart } from '@/recoil/selector/trendingPastChart';
import { trendingPastState } from '@/recoil/atom/trendingPast';
import { Title } from '../ui';
import { chartColorPalette } from '@/constants/chartColorPalette';

const TrendingChart: React.FC = () => {
  const { labels, sportCategory } = useRecoilValue(trendingPastChart);
  const trendingPastData = useRecoilValue(trendingPastState);
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<'bar'> | null>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');

    const chartData: ChartData<'bar', { key: string; value: number }[]> = {
      labels,
      datasets: sportCategory.map((sport, idx) => ({
        label: sport,
        data: labels.map((month) => {
          const dataForMonth = trendingPastData[month];
          const sportData = dataForMonth.find((item) => item.sportName === sport);
          return sportData ? sportData.totalRequestNumber : 0;
        }),
        backgroundColor: chartColorPalette[idx],
        borderColor: 'transparent',
        borderWidth: 1,
        barThickness: 40,
      })),
    };

    // Chart.js 옵션
    const chartOptions: ChartOptions<'bar'> = {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: '#333333',
            font: {
              size: 10,
            },

            usePointStyle: true, // 동그랗게
            pointStyle: 'circle',
          },
        },
      },

      scales: {
        y: {
          beginAtZero: true,

          grid: {
            color: 'transparent',
          },
          ticks: {
            font: {
              size: 10,
            },
            color: '#333333',
          },
        },

        x: {
          grid: {
            color: 'transparent',
          },
          ticks: {
            font: {
              size: 13,
            },
            color: '#333333',
          },
        },
      },
    };

    const createChart = () => {
      Chart.register(...registerables);

      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: chartData,
          options: chartOptions,
        });
      }
    };

    const destroyChart = () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };

    destroyChart(); // 기존 차트 파괴
    createChart(); // 새로운 차트 생성

    return () => {
      destroyChart(); // 컴포넌트가 unmount될 때 차트 파괴
    };
  }, [labels, sportCategory]);

  return (
    <ChartContainer>
      <Title title="🏆 우리 지역 월별 이용권 추세" color={true} />
      <ChartCanvas ref={chartRef} />
    </ChartContainer>
  );
};

export default TrendingChart;

const ChartContainer = styled.div`
  width: 100%;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ChartCanvas = styled.canvas`
  width: 100%;
`;
