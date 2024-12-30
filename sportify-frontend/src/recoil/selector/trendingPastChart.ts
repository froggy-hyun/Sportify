import { selector } from 'recoil';
import { trendingPastState } from '../atom/trendingPast';

export const trendingPastChart = selector({
  key: 'trendingPastChart',
  get: ({ get }) => {
    const data = get(trendingPastState);

    const labels = Object.keys(data); // ['9월', '10월']
    const sportsSet = new Set();

    labels.forEach((month) => {
      data[month].forEach((item) => sportsSet.add(item.sportName));
    });

    const sportCategory = Array.from(sportsSet); // ['태권도', '복싱', '필라테스']

    return { labels, sportCategory };
  },
});
