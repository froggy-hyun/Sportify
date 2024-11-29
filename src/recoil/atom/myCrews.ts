import { atom } from "recoil";


export const myCrewsState = atom<string[]>({
  key: 'myCrewsState',
  default:[],
});
