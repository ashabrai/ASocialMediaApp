import { Reducer } from 'redux';
import { Auth_Action_Types, AuthState } from './types';

export const initialState: AuthState = {
  authData: {
    name: '',
    userName: '',
    email: '',
    token: '',
  },
  errors: undefined,
  isBeingCreated: false,
  isBeingLoggedIn: false,
  isBeingLoggedOut: false,
};

const reducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case Auth_Action_Types.CREATE_USER: {
      return {
        ...state,
        isBeingCreated: true,
      };
    }

    case Auth_Action_Types.CREATE_USER_SUCCEEDED: {
      return {
        ...state,
        isBeingCreated: false,
        authData: action.payload,
      };
    }

    case Auth_Action_Types.CREATE_USER_FAILED: {
      return {
        ...state,
        isBeingCreated: false,
        errors: action.payload,
      };
    }

    case Auth_Action_Types.USER_LOGIN: {
      return {
        ...state,
        isBeingLoggedIn: true,
      };
    }

    case Auth_Action_Types.USER_LOGIN_SUCCEEDED: {
      return {
        ...state,
        isBeingLoggedIn: false,
        authData: action.payload,
      };
    }

    case Auth_Action_Types.USER_LOGIN_FAILED: {
      return {
        ...state,
        isBeingLoggedIn: false,
        errors: action.payload,
      };
    }

    case Auth_Action_Types.USER_LOGGOUT: {
      return {
        ...state,
        isBeingLoggedOut: true,
      };
    }
    case Auth_Action_Types.USER_LOGGOUT_SUCCEEDED: {
      return {
        ...state,
        isBeingLoggedOut: false,
        authData: {
          name: '',
          userName: '',
          email: '',
          token: '',
        },
      };
    }

    case Auth_Action_Types.USER_LOGGOUT_FAILED: {
      return {
        ...state,
        isBeingLoggedOut: false,
        errors: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export { reducer as authReducer };
