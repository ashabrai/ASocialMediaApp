import { AuthActionConstants } from './authActionConstants';

export interface Auth {
  name: string;
  username: string;
  email: string;
  token: string;
  password?: string;
  _id: string;
}

export interface AuthState {
  readonly authData: Auth;
  readonly errors: string;
  readonly isBeingCreated: boolean;
  readonly isBeingLoggedIn: boolean;
  readonly isBeingLoggedOut: boolean;
  readonly isLoggedIn: boolean;
  readonly hasBeenCreated: boolean;
  readonly userDataSaved: boolean;
  readonly isLoggedOut: boolean;
}

// Auth Action Constants and Shape

export interface CreateUserAction {
  type: typeof AuthActionConstants.CREATE_USER;
  payload: any;
}
export interface CreateUserSucceededAction {
  type: typeof AuthActionConstants.CREATE_USER_SUCCEEDED;
  payload: any;
}
export interface CreateUserFailedAction {
  type: typeof AuthActionConstants.CREATE_USER_FAILED;
  payload: any;
}

export interface UserLoginAction {
  type: typeof AuthActionConstants.USER_LOGIN;
  payload: any;
}
export interface UserLoginSucceededAction {
  type: typeof AuthActionConstants.USER_LOGIN_SUCCEEDED;
  payload: any;
}
export interface UserLoginFailedAction {
  type: typeof AuthActionConstants.USER_LOGIN_FAILED;
  payload: any;
}

export interface UserLogoutAction {
  type: typeof AuthActionConstants.USER_LOGOUT;
}
export interface UserLogoutSucceededAction {
  type: typeof AuthActionConstants.USER_LOGOUT_SUCCEEDED;
}
export interface UserLogoutFailedAction {
  type: typeof AuthActionConstants.USER_LOGOUT_FAILED;
  payload: any;
}

export interface SaveUserDataAction {
  type: typeof AuthActionConstants.SAVE_USER_DATA;
  payload: any;
}
export interface SaveUserDataSucceededAction {
  type: typeof AuthActionConstants.SAVE_USER_DATA_SUCCEEDED;
  payload: any;
}
export interface SaveUserDataFailedAction {
  type: typeof AuthActionConstants.SAVE_USER_DATA_FAILED;
  payload: any;
}
