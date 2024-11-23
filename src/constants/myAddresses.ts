export interface MyAddresses {
  id : number,
  name: string
  latitude :  number,
  longitude:  number,
  address : string
}



export const myAddresses :  MyAddresses[] = [
  {
    id :1,
    name: "집",
    latitude : 37.4816741,
    longitude: 126.9149575,
    address : "서울 관악구 신림동 1569-4"
  
  },
  {
    id :2,
    name: "학교",
    latitude : 37.339496586083,
    longitude:  126.73287520461, 
    address : "경기 시흥시 산기대학로 237"
  
  },
  { id :3,
    name: "강원도 강아지집",
    latitude : 37.860367,
    longitude: 128.311526, 
    address : "강아지기여웡"
  
  },
]