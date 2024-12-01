import { atom } from "recoil";
import { MyCrewsState } from "./types";


export const myCrewsState = atom<MyCrewsState[]>({
  key: 'myCrewsState',
  default:[],
});

export const myPastCrewsState = atom<MyCrewsState[]>({
  key: 'myPastCrewsState',
  default:[],
});
