import { RoleActionTypes } from "./role.types";

export const getRoleAction = (role: string) => ({
  type: RoleActionTypes.GET,
  payload: role
});

