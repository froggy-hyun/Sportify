import { atom } from 'recoil';
import { SignUpState} from './types';

export const  signUpState = atom<SignUpState>({
  key: 'signUp',
  default: {
    email: "",
    password: "",
    name: "",
    gender: "MALE",
    disabled: false
  }
});

