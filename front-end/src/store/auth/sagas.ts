import { put, takeLatest, call } from 'redux-saga/effects';
import { AuthActionConstants } from './authActionConstants';
import {
  createUserSucceeded,
  createUserFailed,
  userLoginSucceeded,
  userLoginFailed,
  saveUserDataSucceeded,
  saveUserDataFailed,
  userLogoutSucceeded,
  userLogoutFailed,
  followUserSucceeded,
  followUserFailed,
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

function* storeUserDataGenerator(action) {
  try {
    const user = action.payload;
    yield put(saveUserDataSucceeded(user));
  } catch (e) {
    yield put(saveUserDataFailed(e));
  }
}

function* followUserGenerator(action) {
  try {
    const followId = action.payload;
    const response = yield call(Api.followUser, followId);
    yield put(followUserSucceeded(response));
  } catch (e) {
    yield put(followUserFailed(e));
  }
}
function* watchAllRequest() {
  yield takeLatest(AuthActionConstants.CREATE_USER, createUserGenerator);
  yield takeLatest(AuthActionConstants.USER_LOGIN, userLoginGenerator);
  yield takeLatest(AuthActionConstants.USER_LOGOUT, userLogoutGenerator);
  yield takeLatest(AuthActionConstants.SAVE_USER_DATA, storeUserDataGenerator);
  yield takeLatest(AuthActionConstants.FOLLOW_USER, followUserGenerator);
}

export default watchAllRequest;
