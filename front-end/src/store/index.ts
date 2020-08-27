/* eslint-disable no-restricted-imports */
import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { authReducer } from '../store/auth/reducer';
import { AuthState } from '../store/auth/types';

// import { all } from 'redux-saga/effects';

export interface ApplicationState {
  auth: AuthState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    auth: authReducer,
    router: connectRouter(history),
  });

// once I have the sagas built I can add it here
// export function* rootSaga() {
//     yield all([])
// }
