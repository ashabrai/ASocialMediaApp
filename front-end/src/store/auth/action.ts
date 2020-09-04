import { action } from 'typesafe-actions';
import { Auth_Action_Types, Auth } from './types';

export const createUser = (data: any) => action(Auth_Action_Types.CREATE_USER, data);
export const createUserSucceeded = (authData: Auth) => action(Auth_Action_Types.CREATE_USER_SUCCEEDED, authData);
export const createUserFailed = (message: String) => action(Auth_Action_Types.CREATE_USER_FAILED, message);

export const userLogin = (data: any) => action(Auth_Action_Types.USER_LOGIN, data);
export const userLoginSucceeded = (authData: Auth) => action(Auth_Action_Types.USER_LOGIN_SUCCEEDED, authData);
export const userLoginFailed = (message: String) => action(Auth_Action_Types.USER_LOGIN_FAILED, message);

export const userLogout = () => action(Auth_Action_Types.USER_LOGGOUT);
export const userLogoutSucceeded = (authData: Auth) => action(Auth_Action_Types.USER_LOGGOUT_SUCCEEDED, authData);
export const userLogoutFailed = (message: String) => action(Auth_Action_Types.USER_LOGGOUT_FAILED, message);

export const saveUserData = (data: any) => action(Auth_Action_Types.SAVE_USER_DATA, data);
export const saveUserDataSucceeded = (data: any) => action(Auth_Action_Types.SAVE_USER_DATA_SUCCEEDED, data);
export const saveUserDataFailed = (message: string) => action(Auth_Action_Types.SAVE_USER_DATA_FAILED, message);
