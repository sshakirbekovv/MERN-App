import {
  creaeteUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../../api/users.api";
import { User } from "../../types/user.types";
import { UsersActionTypes } from "./users.types";

export const creaeteUserAction = (data: User) => ({
  type: UsersActionTypes.CREATE_USER,
  payload: creaeteUser(data),
});

export const getUsersAction = () => ({
  type: UsersActionTypes.GET_USERS,
  payload: getUsers(),
});

export const updateUserAction = (data: User, id: string) => ({
  type: UsersActionTypes.UPDATE_USER,
  payload: updateUser(data, id),
});

export const deleteUserAction = (id: string) => ({
  type: UsersActionTypes.DELETE_USER,
  payload: deleteUser(id),
  meta: { id },
});
