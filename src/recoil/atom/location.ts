import { atom } from 'recoil';
import { LocationState} from './types';

export const locationState = atom<LocationState>({
  key: 'Location',
  default: { longitude:0, latitude: 0, address: '' },
});

