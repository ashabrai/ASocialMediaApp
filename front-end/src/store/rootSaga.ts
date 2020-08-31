import { all } from 'redux-saga/effects';
// eslint-disable-next-line no-restricted-imports
import watchAllRequest from '../store/auth/sagas';

export function* rootSaga() {
  yield all([watchAllRequest()]);
}
