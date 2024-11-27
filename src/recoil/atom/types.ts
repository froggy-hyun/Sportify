import { DifficultyLevelType, GenderRuleType, GoalType } from "@/constants/newCrew"

export interface LocationState{ 
  longitude : number,
  latitude  : number,  
  address : string
}

export type GoalKeyType = keyof typeof GoalType
export type GenderRuleKeyType = keyof typeof GenderRuleType
export type DifficultyLevelKeyType = keyof typeof DifficultyLevelType


export interface NewCrewState{
  crewName: string,
  goals:  typeof GoalType[GoalKeyType][]; 
  genderRule: typeof GenderRuleType[GenderRuleKeyType];
  rules : string[]
  difficultyLevel: typeof DifficultyLevelType[keyof typeof DifficultyLevelType];
  capacity: number
  imageId:number
}


