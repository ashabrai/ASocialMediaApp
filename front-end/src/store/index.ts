/* eslint-disable no-restricted-imports */
import { combineReducers } from 'redux';
import { authReducer } from '../store/auth/reducer';
import { AuthState } from '../store/auth/types';

export interface ApplicationState {
  auth: AuthState;
}

export const rootReducers = combineReducers<ApplicationState>({
  auth: authReducer,
});
