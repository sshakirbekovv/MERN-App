import { User } from "../../types/user.types";
import { UsersAction, UsersActionTypes } from "./users.types";

interface UsersState {
  users: User[];
  error: string;
}

const defaultState = {
  users: [],
  error: "",
};

export const userReducer = (
  state: UsersState = defaultState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case `${UsersActionTypes.CREATE_USER}_FULFILLED`:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case `${UsersActionTypes.GET_USERS}_FULFILLED`:
      return {
        ...state,
        users: action.payload,
      };
    case `${UsersActionTypes.UPDATE_USER}_FULFILLED`:
      return {
        ...state,
        users: [
          ...state.users.map((user) =>
            user._id === action.payload._id ? action.payload : user
          ),
        ],
      };
    case `${UsersActionTypes.DELETE_USER}_FULFILLED`:
      return {
        ...state,
        users: state.users.filter((user: User) => user._id !== action.meta.id),
      };
    default:
      return state;
  }
};
