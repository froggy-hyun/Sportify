import { atom } from 'recoil';
import { LocationState } from './types';

export const userAddressState = atom<LocationState>({
  key: 'userAddressState',
  default: { longitude:126.978652258823, latitude: 37.56682420267543, address: '서울 중구 세종대로 110 서울특별시청' },
  // 추후 사용자 주소 정보 중, 선택한 주소를 default값으로
});


