export enum RoleActionTypes {
   GET = 'GET_ROLE',
}

export interface RoleAction {
  type: RoleActionTypes;
  payload?: any;
}
