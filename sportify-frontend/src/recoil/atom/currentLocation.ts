import { atom } from "recoil";
import { LocationState } from "./types";

export const currentLocationState = atom<LocationState>({
  key: 'currentLocationState',
  default:{ longitude:0, latitude: 0, address: '' },
});
