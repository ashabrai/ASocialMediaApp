/* eslint-disable no-restricted-imports */
import { all } from 'redux-saga/effects';
import watchAllRequest from '../store/auth/sagas';
import watchAllUserRequest from '../store/user/sagas';

export function* rootSaga() {
  yield all([watchAllRequest(), watchAllUserRequest()]);
}
