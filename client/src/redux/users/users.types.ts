export enum UsersActionTypes {
   CREATE_USER = 'CREATE_USER',
   GET_USERS = 'GET_USERS',
   DELETE_USER = 'DELETE_USER',
   UPDATE_USER = 'UPDATE_USER'
}

export interface UsersAction {
  type: UsersActionTypes;
  payload?: any;
  meta: { id: string };
}
