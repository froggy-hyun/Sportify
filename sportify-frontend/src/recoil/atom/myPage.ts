import { atom } from "recoil";
import { userInfoState } from "./types";

export const myInfoState = atom<userInfoState>({
  key: 'myInfoState',
  default:{
    name: "",
    disabled: false
  },
});
