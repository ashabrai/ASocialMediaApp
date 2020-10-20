import { Reducer } from 'redux';
import { AuthState } from './types';
import { AuthActionConstants } from './authActionConstants';

export const initialState: AuthState = {
  authData: {
    name: '',
    username: '',
    email: '',
    token: '',
    _id: '',
  },
  errors: undefined,
  isBeingCreated: false,
  isBeingLoggedIn: false,
  isBeingLoggedOut: false,
  hasBeenCreated: false,
  isLoggedIn: false,
  isLoggedOut: false,
  userDataSaved: false,
};

const authReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionConstants.CREATE_USER: {
      return {
        ...state,
        isBeingCreated: true,
      };
    }

    case AuthActionConstants.CREATE_USER_SUCCEEDED: {
      return {
        ...state,
        isBeingCreated: false,
        hasBeenCreated: true,
        authData: action.payload,
      };
    }

    case AuthActionConstants.CREATE_USER_FAILED: {
      return {
        ...state,
        isBeingCreated: false,
        hasBeenCreated: false,
        authData: {
          name: '',
          username: '',
          email: '',
          token: '',
          _id: '',
        },
        errors: action.payload.error,
      };
    }

    case AuthActionConstants.USER_LOGIN: {
      return {
        ...state,
        isBeingLoggedIn: true,
        isLoggedIn: false,
        hasBeenCreated: false,
      };
    }

    case AuthActionConstants.USER_LOGIN_SUCCEEDED: {
      return {
        ...state,
        isBeingLoggedIn: false,
        authData: action.payload,
        isLoggedIn: true,
      };
    }

    case AuthActionConstants.USER_LOGIN_FAILED: {
      return {
        ...state,
        isBeingLoggedIn: false,
        errors: action.payload.error,
        isLoggedIn: false,
      };
    }

    case AuthActionConstants.USER_LOGOUT: {
      return {
        ...state,
        isBeingLoggedOut: true,
      };
    }
    case AuthActionConstants.USER_LOGOUT_SUCCEEDED: {
      return {
        ...state,
        isBeingLoggedOut: false,
        isLoggedIn: false,
        authData: {
          name: '',
          username: '',
          email: '',
          token: '',
          _id: '',
        },
      };
    }

    case AuthActionConstants.USER_LOGOUT_FAILED: {
      return {
        ...state,
        isBeingLoggedOut: false,
        isLoggedIn: true,
        errors: action.payload.error,
      };
    }

    case AuthActionConstants.SAVE_USER_DATA: {
      return {
        ...state,
        userDataSaved: false,
      };
    }

    case AuthActionConstants.SAVE_USER_DATA_SUCCEEDED: {
      return {
        ...state,
        authData: action.payload,
        userDataSaved: true,
        isLoggedIn: true,
      };
    }

    case AuthActionConstants.SAVE_USER_DATA_FAILED: {
      return {
        ...state,
        authData: {
          name: '',
          username: '',
          email: '',
          token: '',
          _id: '',
        },
        errors: action.payload.error,
        isLoggedIn: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer as Reducer;
