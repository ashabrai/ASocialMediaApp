/* eslint-disable no-restricted-imports */
import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { authReducer } from '../store/auth/reducer';
import { AuthState } from '../store/auth/types';

export interface ApplicationState {
  auth: AuthState;
  router: RouterState;
}

export const createRootReducer = (injectedReducers) => {
  return (history: History) =>
    combineReducers({
      auth: authReducer,
      router: connectRouter(history),
      ...injectedReducers,
    });
};
