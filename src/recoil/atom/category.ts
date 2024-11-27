import { atom } from 'recoil';
import { CatergoryState } from './types';

export const currentCategoryState = atom<CatergoryState>({
  key: 'category',
  default: {
    title: '격투 및 무술',
    majorCategory_idx: 0,
    middleCategory_idx: 0,
  },
});

