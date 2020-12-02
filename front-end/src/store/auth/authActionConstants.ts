export enum AuthActionConstants {
  CREATE_USER = '@@auth/CREATE_USER',
  CREATE_USER_SUCCEEDED = '@@auth/CREATE_USER_SUCCEEDED',
  CREATE_USER_FAILED = '@@auth/CREATE_USER_FAILED',

  USER_LOGIN = '@@auth/USER_LOGIN',
  USER_LOGIN_SUCCEEDED = '@@auth/USER_LOGIN_SUCCEEDED',
  USER_LOGIN_FAILED = '@@auth/USER_LOGIN_FAILED',

  USER_LOGOUT = '@@auth/USER_LOGOUT',
  USER_LOGOUT_SUCCEEDED = '@@auth/USER_LOGOUT_SUCCEEDED',
  USER_LOGOUT_FAILED = '@@auth/USER_LOGOUT_FAILED',

  SAVE_USER_DATA = '@@auth/SAVE_USER_DATA',
  SAVE_USER_DATA_SUCCEEDED = '@@auth/SAVE_USER_DATA_SUCCEEDED',
  SAVE_USER_DATA_FAILED = '@@auth/SAVE_USER_DATA_FAILED',

  UPDATE_USER_PROFILE_IMAGE ='@@auth/UPDATE_USER_PROFILE_IMAGE', 
  UPDATE_USER_PROFILE_IMAGE_SUCCEEDED = '@@auth/UPDATE_USER_PROFILE_IMAGE_SUCCEEDED',
  UPDATE_USER_PROFILE_IMAGE_FAILED = '@@auth/UPDATE_USER_PROFILE_IMAGE_FAILED' 
}
