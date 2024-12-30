import { atom } from "recoil";
import { MyAddressesState } from "./types";

export const  myAddressesState = atom<MyAddressesState[]>({
  key: 'myAddresses',
  default: []
});



