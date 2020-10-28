import { AuthActionConstants } from './authActionConstants';

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
  readonly isFollowingUser: boolean;
  readonly followers: any;
  readonly following: any;
}

export interface Auth {
  name: string;
  username: string;
  email: string;
  token: string;
  password?: string;
  _id: string;
}

export interface CreateUserPayload {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface CreateUserSuccessPayload {
  message: string;
  user: {
    _id: string;
    name: string;
    username: string;
  };
}

export interface LoginSucceedPayload {
  token: string;
  user: {
    _id: string;
    name: string;
    email: string;
    username: string;
  };
}

// Auth Action Constants and Shape

export interface CreateUserAction {
  type: typeof AuthActionConstants.CREATE_USER;
  payload: CreateUserPayload;
}
export interface CreateUserSucceededAction {
  type: typeof AuthActionConstants.CREATE_USER_SUCCEEDED;
  payload: CreateUserSuccessPayload;
}
export interface CreateUserFailedAction {
  type: typeof AuthActionConstants.CREATE_USER_FAILED;
  payload: string;
}

export interface UserLoginAction {
  type: typeof AuthActionConstants.USER_LOGIN;
  payload: { email: string; password: string };
}
export interface UserLoginSucceededAction {
  type: typeof AuthActionConstants.USER_LOGIN_SUCCEEDED;
  payload: LoginSucceedPayload;
}
export interface UserLoginFailedAction {
  type: typeof AuthActionConstants.USER_LOGIN_FAILED;
  payload: string;
}

export interface UserLogoutAction {
  type: typeof AuthActionConstants.USER_LOGOUT;
}
export interface UserLogoutSucceededAction {
  type: typeof AuthActionConstants.USER_LOGOUT_SUCCEEDED;
}
export interface UserLogoutFailedAction {
  type: typeof AuthActionConstants.USER_LOGOUT_FAILED;
  payload: string;
}

export interface SaveUserDataAction {
  type: typeof AuthActionConstants.SAVE_USER_DATA;
  payload: Auth;
}
export interface SaveUserDataSucceededAction {
  type: typeof AuthActionConstants.SAVE_USER_DATA_SUCCEEDED;
  payload: Auth;
}
export interface SaveUserDataFailedAction {
  type: typeof AuthActionConstants.SAVE_USER_DATA_FAILED;
  payload: string;
}

export interface FollowUserAction {
  type: typeof AuthActionConstants.FOLLOW_USER;
  payload: string;
}
export interface FollowUserSucceededAction {
  type: typeof AuthActionConstants.FOLLOW_USER_SUCCEEDED;
  payload: { following: Array<any> };
}
export interface FollowUserFailedAction {
  type: typeof AuthActionConstants.FOLLOW_USER_FAILED;
  payload: string;
}
