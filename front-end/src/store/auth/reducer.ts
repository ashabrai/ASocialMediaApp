import { Reducer } from 'redux';
import { AuthAction, AuthState } from './types';

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

const reducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthAction.CREATE_USER: {
      return {
        ...state,
        isBeingCreated: true,
      };
    }

    case AuthAction.CREATE_USER_SUCCEEDED: {
      return {
        ...state,
        isBeingCreated: false,
        hasBeenCreated: true,
        authData: action.payload,
      };
    }

    case AuthAction.CREATE_USER_FAILED: {
      return {
        ...state,
        isBeingCreated: false,
        hasBeenCreated: false,
        errors: action.payload.Error,
      };
    }

    case AuthAction.USER_LOGIN: {
      return {
        ...state,
        isBeingLoggedIn: true,
        isLoggedIn: false,
        hasBeenCreated: false,
      };
    }

    case AuthAction.USER_LOGIN_SUCCEEDED: {
      return {
        ...state,
        isBeingLoggedIn: false,
        authData: action.payload,
        isLoggedIn: true,
      };
    }

    case AuthAction.USER_LOGIN_FAILED: {
      return {
        ...state,
        isBeingLoggedIn: false,
        errors: action.payload,
        isLoggedIn: false,
      };
    }

    case AuthAction.USER_LOGGOUT: {
      return {
        ...state,
        isBeingLoggedOut: true,
      };
    }
    case AuthAction.USER_LOGGOUT_SUCCEEDED: {
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

    case AuthAction.USER_LOGGOUT_FAILED: {
      return {
        ...state,
        isBeingLoggedOut: false,
        isLoggedIn: false,
        errors: action.payload,
      };
    }

    case AuthAction.SAVE_USER_DATA: {
      return {
        ...state,
        userDataSaved: false,
      };
    }

    case AuthAction.SAVE_USER_DATA_SUCCEEDED: {
      return {
        ...state,
        authData: action.payload,
        userDataSaved: true,
        isLoggedIn: true,
      };
    }

    case AuthAction.SAVE_USER_DATA_FAILED: {
      return {
        ...state,
        authData: {
          name: '',
          username: '',
          email: '',
          token: '',
          _id: '',
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
