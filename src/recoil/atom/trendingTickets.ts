import { atom } from 'recoil';
import {  TrendingTicketsState} from './types';

export const  trendingTicketsState = atom< TrendingTicketsState[]>({
  key: 'trending',
  default: []
});

