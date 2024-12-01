import { DifficultyLevelType, GenderRuleType, GoalType } from "@/constants/newCrew"
import { Disabled, Gender } from "@/constants/signUpInfo"

export interface LocationState{ 
  longitude : number,
  latitude  : number,  
  address : string
}

export interface CatergoryState {
  title: string;
  majorCategory_idx : number;
  middleCategory_idx : number;
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

export interface SignUpState extends LoginState  {
  name: string,
  gender: typeof Gender[GenderKey]
  disabled: boolean
}


export interface LoginState {
  email: string,
  password:string,
}


export type GenderKey = keyof typeof Gender
export type DisabledKey = keyof typeof Disabled



export interface MyAddressesState {
  addressId : number,
  address : string,
  addressName: string

}



export interface addressesType{
  longitude : number,
  latitude  : number,  
  address : string
  addressName: string
}



export interface TrendingTicketsState  {
  voucherId?:  number,
  voucherCourseName:string ,
  subCategory?: string ,
  address?: string ,
  duration?: string ,
  requestNumberOfPerson?: number,
  price?: number
}


export interface MyCrewsState {
  crewId: number,
  crewName: string,
  voucherCourseName:string,
  duration: string,
  voucherAddress: string,
  imageUrl: string,
}
export interface ActivityTicketsState {
  voucherId?: number,
  voucherCourseName: string,
  crewName?: string,
  voucherAddress?: string,
}
