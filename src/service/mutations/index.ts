import { addressesType, LoginState , NewCrewState, SignUpState } from "@/recoil/atom/types";
import { authAPI, baseAPI } from "../customApi";


export const loginApi = async (loginState: LoginState ) => {
  const data = await baseAPI.post("/members/login", loginState);
  return data;
};


export const signUpApi = async (signUpState: SignUpState) => {
  const data = await baseAPI.post("/members/register", signUpState);
  return data;
};


export const addressSelectApi = async (id:  number) => {
  const data = await authAPI.patch(`/addresses/${id}`);
  return data;
};


export const addressesApi = async (address : addressesType) => {
  const data = await authAPI.post("/addresses",address);
  return data;
};


export const crewImgApi = async (img: File) => {
  const formData = new FormData();
  formData.append('image', img); 

  const data = await authAPI.post("/crews/images", formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};


export const newCrewApi = async ({ newCrewInfo, sportVoucherId }: { newCrewInfo: NewCrewState; sportVoucherId: number }) => {
  console.log(newCrewInfo)
  const data = await authAPI.post(`/sport-vouchers/${sportVoucherId }`,newCrewInfo );
  return data;
};
