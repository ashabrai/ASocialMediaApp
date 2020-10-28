import { AuthActionConstants } from './authActionConstants';
import {
  CreateUserPayload,
  CreateUserSuccessPayload,
  LoginSucceedPayload,
  Auth,
  CreateUserAction,
  CreateUserSucceededAction,
  CreateUserFailedAction,
  UserLoginAction,
  UserLoginSucceededAction,
  UserLoginFailedAction,
  UserLogoutAction,
  UserLogoutSucceededAction,
  UserLogoutFailedAction,
  SaveUserDataAction,
  SaveUserDataSucceededAction,
  SaveUserDataFailedAction,
  FollowUserAction,
  FollowUserSucceededAction,
  FollowUserFailedAction,
} from './types';

export function createUser(payload: CreateUserPayload): CreateUserAction {
  return {
    type: AuthActionConstants.CREATE_USER,
    payload,
  };
}
export function createUserSucceeded(payload: CreateUserSuccessPayload): CreateUserSucceededAction {
  return {
    type: AuthActionConstants.CREATE_USER_SUCCEEDED,
    payload,
  };
}
export function createUserFailed(payload: string): CreateUserFailedAction {
  return {
    type: AuthActionConstants.CREATE_USER_FAILED,
    payload,
  };
}

export function userLogin(payload: { email: string; password: string }): UserLoginAction {
  return {
    type: AuthActionConstants.USER_LOGIN,
    payload,
  };
}
export function userLoginSucceeded(payload: LoginSucceedPayload): UserLoginSucceededAction {
  return {
    type: AuthActionConstants.USER_LOGIN_SUCCEEDED,
    payload,
  };
}
export function userLoginFailed(payload: string): UserLoginFailedAction {
  return {
    type: AuthActionConstants.USER_LOGIN_FAILED,
    payload,
  };
}

export function userLogout(): UserLogoutAction {
  return {
    type: AuthActionConstants.USER_LOGOUT,
  };
}
export function userLogoutSucceeded(): UserLogoutSucceededAction {
  return {
    type: AuthActionConstants.USER_LOGOUT_SUCCEEDED,
  };
}
export function userLogoutFailed(payload: string): UserLogoutFailedAction {
  return {
    type: AuthActionConstants.USER_LOGOUT_FAILED,
    payload,
  };
}

export function saveUserData(payload: Auth): SaveUserDataAction {
  return {
    type: AuthActionConstants.SAVE_USER_DATA,
    payload,
  };
}
export function saveUserDataSucceeded(payload: Auth): SaveUserDataSucceededAction {
  return {
    type: AuthActionConstants.SAVE_USER_DATA_SUCCEEDED,
    payload,
  };
}
export function saveUserDataFailed(payload: string): SaveUserDataFailedAction {
  return {
    type: AuthActionConstants.SAVE_USER_DATA_FAILED,
    payload,
  };
}

export function followUser(payload: string): FollowUserAction {
  return {
    type: AuthActionConstants.FOLLOW_USER,
    payload,
  };
}
export function followUserSucceeded(payload: any): FollowUserSucceededAction {
  return {
    type: AuthActionConstants.FOLLOW_USER_SUCCEEDED,
    payload,
  };
}
export function followUserFailed(payload: string): FollowUserFailedAction {
  return {
    type: AuthActionConstants.FOLLOW_USER_FAILED,
    payload,
  };
}
