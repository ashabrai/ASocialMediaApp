import { put, takeLatest, call } from 'redux-saga/effects';
import { Auth_Action_Types } from './types';
import {
  createUserSucceeded,
  createUserFailed,
  userLoginSucceeded,
  userLoginFailed,
  saveUserDataSucceeded,
  saveUserDataFailed,
  userLogoutSucceeded,
  userLogoutFailed,
} from './action';

import Api from './api';

function* createUserGenerator(action) {
  try {
    const response = yield call(Api.createUser, action.payload);
    yield put(createUserSucceeded(response.user));
  } catch (error) {
    yield put(createUserFailed(error));
  }
}

function* userLoginGenerator(action) {
  try {
    const response = yield call(Api.userLogin, action.payload);
    localStorage.setItem('jwt', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
    yield put(userLoginSucceeded(response.user));
  } catch (error) {
    yield put(userLoginFailed(error));
  }
}

function* userLogoutGenerator() {
  try {
    localStorage.clear();
    yield put(userLogoutSucceeded());
  } catch (e) {
    yield put(userLogoutFailed(e));
  }
}

function* storeUserData(action) {
  try {
    const user = action.payload;
    yield put(saveUserDataSucceeded(user));
  } catch (e) {
    yield put(saveUserDataFailed(e));
  }
}
function* watchAllRequest() {
  yield takeLatest(Auth_Action_Types.CREATE_USER, createUserGenerator);
  yield takeLatest(Auth_Action_Types.USER_LOGIN, userLoginGenerator);
  yield takeLatest(Auth_Action_Types.USER_LOGGOUT, userLogoutGenerator);
  yield takeLatest(Auth_Action_Types.SAVE_USER_DATA, storeUserData);
}

export default watchAllRequest;
