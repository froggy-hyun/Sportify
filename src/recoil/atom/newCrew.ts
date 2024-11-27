import { atom } from 'recoil';
import { NewCrewState} from './types';

export const  newCrewState = atom< NewCrewState>({
  key: 'newCrew',
  default: {
    crewName : "",
    goals: [
      "FITNESS_ENHANCEMENT"
    ],
    genderRule: "MALE_ONLY",
    rules: [""],
    difficultyLevel: "EVERYONE",
    capacity: 1,
    imageId: 0
  }
});


export const newCrewImgState = atom<string|null>({
  key: '',
  default: null
});