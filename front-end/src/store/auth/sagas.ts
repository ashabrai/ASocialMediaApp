import { put, takeLatest, call } from 'redux-saga/effects';
import { Auth_Action_Types } from './types';
import { createUserSucceeded, createUserFailed } from './action';
import Api from './api';

function* createUserGenerator(action) {
  try {
    const response = yield call(Api.createUser, action.payload);
    console.log(response);
    yield put(createUserSucceeded(response.user));
  } catch (e) {
    yield put(createUserFailed(e));
  }
}

function* watchAllRequest() {
  yield takeLatest(Auth_Action_Types.CREATE_USER, createUserGenerator);
}

export default watchAllRequest;
