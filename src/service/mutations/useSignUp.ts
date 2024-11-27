import { SignUpState } from "@/recoil/atom/types";
import { baseAPI } from "../customApi";


export const signUpApi = async (signUpState: SignUpState) => {
  const data = await baseAPI.post("/members/register", signUpState);
  return data;
};
