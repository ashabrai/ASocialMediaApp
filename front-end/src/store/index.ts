import { combineReducers } from 'redux';
import { authReducer } from 'store/auth/reducer';
import { AuthState } from 'store/auth/types';
import UserState from './user/types';
import userReducer from 'store/user/reducer';

export interface ApplicationState {
  auth: AuthState;
  user: UserState;
}

export const rootReducers = combineReducers<ApplicationState>({
  auth: authReducer,
  user: userReducer,
});
