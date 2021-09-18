import { signIn, signUp } from "../../api/auth.api";
import { User } from "../../types/user.types";
import { AuthActionTypes } from "./auth.types";

export const signUpAction = (data: User) => ({
  type: AuthActionTypes.AUTH_SIGNUP,
  payload: signUp(data),
});

export const signInAction = (data: User) => ({
  type: AuthActionTypes.AUTH_SIGNIN,
  payload: signIn(data),
});

export const signOutAction = () => {
  return {
    type: AuthActionTypes.AUTH_SIGNOUT,
    payload: null,
  };
};
