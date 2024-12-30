import { atom } from 'recoil';
import { CrewDetailState } from './types';


export const crewDetailState = atom< CrewDetailState[]>({
  key: 'crewDetail',
  default:[ 
   ]
});
