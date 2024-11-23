import { atom } from 'recoil';

export const userAddressState = atom<string>({
  key: 'userAddressState',
  default: '산기대학로 237 한국공학대학교 제 2기숙사',
  // 추후 사용자 주소 정보 중, 선택한 주소를 default값으로
});
