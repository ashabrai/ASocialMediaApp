import { AuthActionConstants } from './authActionConstants';
import {
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
} from './types';

export function createUser(payload: any): CreateUserAction {
  return {
    type: AuthActionConstants.CREATE_USER,
    payload,
  };
}
export function createUserSucceeded(payload: any): CreateUserSucceededAction {
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

export function userLogin(payload: any): UserLoginAction {
  return {
    type: AuthActionConstants.USER_LOGIN,
    payload,
  };
}
export function userLoginSucceeded(payload: any): UserLoginSucceededAction {
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

export function saveUserData(payload: any): SaveUserDataAction {
  return {
    type: AuthActionConstants.SAVE_USER_DATA,
    payload,
  };
}
export function saveUserDataSucceeded(payload: any): SaveUserDataSucceededAction {
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
