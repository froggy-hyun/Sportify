import { atom } from 'recoil';


export const userAddressState = atom<string>({
  key: 'userAddressState',
  default: '서울 중구 세종대로 110 서울특별시청' 
  // 추후 사용자 주소 정보 중, 선택한 주소를 default값으로
});


