import { atom } from 'recoil';
import { TrendingPastState } from './types';

export const trendingPastState = atom<TrendingPastState>({
  key: 'trendingPastState',
  default: {
    '' : [],
    '' : []
  },
});

