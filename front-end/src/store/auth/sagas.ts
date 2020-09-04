import { put, takeLatest, call } from 'redux-saga/effects';
import { Auth_Action_Types } from './types';
import {
  createUserSucceeded,
  createUserFailed,
  userLoginSucceeded,
  userLoginFailed,
  saveUserDataSucceeded,
  saveUserDataFailed,
} from './action';

import Api from './api';

function* createUserGenerator(action) {
  try {
    const response = yield call(Api.createUser, action.payload);
    // // if (response.status !== 200) {
    //   console.log(response);
    //   throw new Error(response);
    // }
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
  yield takeLatest(Auth_Action_Types.SAVE_USER_DATA, storeUserData);
}

export default watchAllRequest;
