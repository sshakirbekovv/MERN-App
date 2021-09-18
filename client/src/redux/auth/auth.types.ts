export enum AuthActionTypes {
   AUTH_SIGNUP = 'AUTH_SIGNUP',
   AUTH_SIGNIN = 'AUTH_SIGNIN',
   AUTH_SIGNOUT = ' AUTH_SIGNOUT',
}

export interface AuthAction {
  type: AuthActionTypes;
  payload?: any;
}
