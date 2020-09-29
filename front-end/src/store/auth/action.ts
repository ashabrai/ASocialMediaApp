import { action } from 'typesafe-actions';
import { AuthAction, Auth } from './types';

export const createUser = (data: any) => action(AuthAction.CREATE_USER, data);
export const createUserSucceeded = (authData: Auth) => action(AuthAction.CREATE_USER_SUCCEEDED, authData);
export const createUserFailed = (message: string) => action(AuthAction.CREATE_USER_FAILED, message);

export const userLogin = (data: any) => action(AuthAction.USER_LOGIN, data);
export const userLoginSucceeded = (authData: Auth) => action(AuthAction.USER_LOGIN_SUCCEEDED, authData);
export const userLoginFailed = (message: string) => action(AuthAction.USER_LOGIN_FAILED, message);

export const userLogout = () => action(AuthAction.USER_LOGGOUT);
export const userLogoutSucceeded = () => action(AuthAction.USER_LOGGOUT_SUCCEEDED);
export const userLogoutFailed = (message: string) => action(AuthAction.USER_LOGGOUT_FAILED, message);

export const saveUserData = (data: any) => action(AuthAction.SAVE_USER_DATA, data);
export const saveUserDataSucceeded = (data: any) => action(AuthAction.SAVE_USER_DATA_SUCCEEDED, data);
export const saveUserDataFailed = (message: string) => action(AuthAction.SAVE_USER_DATA_FAILED, message);
