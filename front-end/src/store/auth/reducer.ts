import { Reducer } from 'redux';
import { Auth_Action_Types, AuthState } from './types';

export const initialState: AuthState = {
  authData: {
    name: '',
    username: '',
    email: '',
    token: '',
  },
  errors: undefined,
  isBeingCreated: false,
  isBeingLoggedIn: false,
  isBeingLoggedOut: false,
  hasBeenCreated: false,
  isLoggedIn: false,
  userDataSaved: false,
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
        hasBeenCreated: true,
        authData: action.payload,
      };
    }

    case Auth_Action_Types.CREATE_USER_FAILED: {
      return {
        ...state,
        isBeingCreated: false,
        hasBeenCreated: false,
        errors: action.payload.Error,
      };
    }

    case Auth_Action_Types.USER_LOGIN: {
      return {
        ...state,
        isBeingLoggedIn: true,
        isLoggedIn: false,
      };
    }

    case Auth_Action_Types.USER_LOGIN_SUCCEEDED: {
      return {
        ...state,
        isBeingLoggedIn: false,
        authData: action.payload,
        isLoggedIn: true,
      };
    }

    case Auth_Action_Types.USER_LOGIN_FAILED: {
      return {
        ...state,
        isBeingLoggedIn: false,
        errors: action.payload,
        isLoggedIn: false,
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
          username: '',
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

    case Auth_Action_Types.SAVE_USER_DATA: {
      return {
        ...state,
        userDataSaved: false,
      };
    }

    case Auth_Action_Types.SAVE_USER_DATA_SUCCEEDED: {
      return {
        ...state,
        authData: action.payload,
        userDataSaved: true,
        isLoggedIn: true,
      };
    }

    case Auth_Action_Types.SAVE_USER_DATA_FAILED: {
      return {
        ...state,
        authData: {
          name: '',
          username: '',
          email: '',
          token: '',
        },
        errors: action.payload,
        isLoggedIn: false,
      };
    }

    default: {
      return state;
    }
  }
};

export { reducer as authReducer };
