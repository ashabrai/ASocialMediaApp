export interface Auth {
  name: string;
  username: string;
  email: string;
  token: string;
  password?: string;
  _id: string;
}

export enum AuthAction {
  CREATE_USER = '@@auth/CREATE_USER',
  CREATE_USER_SUCCEEDED = '@@auth/CREATE_USER_SUCCEEDED',
  CREATE_USER_FAILED = '@@auth/CREATE_USER_FAILED',

  USER_LOGIN = '@@auth/USER_LOGIN',
  USER_LOGIN_SUCCEEDED = '@@auth/USER_LOGIN_SUCCEEDED',
  USER_LOGIN_FAILED = '@@auth/USER_LOGIN_FAILED',

  USER_LOGGOUT = '@@auth/USER_LOGGOUT',
  USER_LOGGOUT_SUCCEEDED = '@@auth/USER_LOGGOUT_SUCCEEDED',
  USER_LOGGOUT_FAILED = '@@auth/USER_LOGGOUT_FAILED',

  SAVE_USER_DATA = '@@auth/SAVE_USER_DATA',
  SAVE_USER_DATA_SUCCEEDED = '@@auth/SAVE_USER_DATA_SUCCEEDED',
  SAVE_USER_DATA_FAILED = '@@auth/SAVE_USER_DATA_FAILED',
}

export interface AuthState {
  readonly authData: Auth;
  readonly errors?: string;
  readonly isBeingCreated?: boolean;
  readonly isBeingLoggedIn?: boolean;
  readonly isBeingLoggedOut?: boolean;
  readonly isLoggedIn?: boolean;
  readonly hasBeenCreated?: boolean;
  readonly userDataSaved?: boolean;
  readonly isLoggedOut?: boolean;
}
