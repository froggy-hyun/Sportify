import { atom } from 'recoil';
import { CrewDetailState } from './types';


export const crewDetailState = atom< CrewDetailState[]>({
  key: 'crewDetail',
  default:[ 
    {
    memberId: 1,
     name: "덕배"
  },
  {
    memberId: 2,
     name: "덕배"
  }
, {
  memberId: 3,
   name: "덕배"
}]
});
