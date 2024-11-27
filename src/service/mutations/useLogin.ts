import { LoginState } from "@/recoil/atom/types";
import { baseAPI } from "../customApi";


export const loginApi = async (loginState: LoginState ) => {
  const data = await baseAPI.post("/members/login", loginState);
  return data;
};
