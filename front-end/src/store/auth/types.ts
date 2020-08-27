/* eslint-disable @typescript-eslint/naming-convention */
export interface Auth {
  name: String;
  userName: String;
  email: String;
  token: String;
}

export enum Auth_Action_Types {
  CREATE_USER = '@@auth/CREATE_USER',
  CREATE_USER_SUCCEEDED = '@@auth/CREATE_USER_SUCCEEDED',
  CREATE_USER_FAILED = '@@auth/CREATE_USER_FAILED',

  USER_LOGIN = '@@auth/USER_LOGIN',
  USER_LOGIN_SUCCEEDED = '@@auth/USER_LOGIN_SUCCEEDED',
  USER_LOGIN_FAILED = '@@auth/USER_LOGIN_FAILED',

  USER_LOGGOUT = '@@auth/USER_LOGGOUT',
  USER_LOGGOUT_SUCCEEDED = '@@auth/USER_LOGGOUT_SUCCEEDED',
  USER_LOGGOUT_FAILED = '@@auth/USER_LOGGOUT_FAILED',
}

export interface AuthState {
  readonly authData: Auth;
  readonly errors?: string;
  readonly isBeingCreated?: boolean;
  readonly isBeingLoggedIn?: boolean;
  readonly isBeingLoggedOut?: boolean;
}
