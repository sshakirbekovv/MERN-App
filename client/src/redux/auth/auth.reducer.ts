import { User } from "../../types/user.types";
import { AuthAction, AuthActionTypes } from "./auth.types";

interface AuthState {
  user: User | null;
  userLogged: boolean;
  error: string;
}

const defaultState = {
  user: null,
  userLogged: false,
  error: "",
};

export const authReducer = (
  state: AuthState = defaultState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case `${AuthActionTypes.AUTH_SIGNUP}_PENDING`:
      return {
        ...state,
        user: null,
        userLogged: false,
      };
    case `${AuthActionTypes.AUTH_SIGNUP}_FULFILLED`:
      return {
        ...state,
        user: action.payload,
        userLogged: true,
      };
    case `${AuthActionTypes.AUTH_SIGNUP}_REJECTED`:
      return {
        ...state,
        error: action.payload.name,
        userLogged: false,
      };
    case `${AuthActionTypes.AUTH_SIGNIN}_PENDING`:
      return {
        ...state,
        user: null,
        userLogged: false,
      };
    case `${AuthActionTypes.AUTH_SIGNIN}_FULFILLED`:
      return {
        ...state,
        user: action.payload,
        userLogged: true,
      };
    case `${AuthActionTypes.AUTH_SIGNIN}_REJECTED`:
      return {
        ...state,
        error: action.payload.name,
        userLogged: false,
      };
    case AuthActionTypes.AUTH_SIGNOUT:
      return {
        ...state,
        user: null,
        userLogged: false,
      };
    default:
      return state;
  }
};
