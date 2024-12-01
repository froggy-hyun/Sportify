import { atom } from 'recoil';
import {CrewInfoState } from './types';

export const crewInfoState = atom<CrewInfoState>({
  key: 'crewInfo',
  default: {
   crewId:null,
   crewName: "",
   rules: [],
    goals: [],
    difficultyLevel: "자유",
    capacity: 1,
    numberOfParticipants: 0,
    genderRule: "무관",
    imageUrl: ""
  },
});

