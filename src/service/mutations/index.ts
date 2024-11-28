import { LoginState , SignUpState } from "@/recoil/atom/types";
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


