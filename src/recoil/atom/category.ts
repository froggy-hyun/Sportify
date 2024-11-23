import { atom } from 'recoil';
import { CatergoryState } from './types';

export const currentCategoryState = atom<CatergoryState>({
  key: 'category',
  default: {
    title: '격투 및 무술',
    idx: 0,
  },
});

