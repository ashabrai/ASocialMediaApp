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
} from './action';

import Api from './api';
import UserAPI from 'store/user/api';

function* getProfileImageURL(action) {
  try{
    const { image, name, username, email, password} = action.payload;
    const postProfileImageToCloud = yield call(UserAPI.storeImageToCloud, image)
    const profileImageUrl = postProfileImageToCloud.url;
    const data = { profileImageUrl, name, username, email, password};
    console.log(data)
    // yield call(createUserGenerator, data)
  }catch(e){
    yield put(createUserFailed(e));

  }
}

function* createUserGenerator(data) {
  try {
    const response = yield call(Api.createUser, data);
    console.log(response, ' response in payload')
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

function* watchAllRequest() {
  yield takeLatest(AuthActionConstants.CREATE_USER, getProfileImageURL);
  yield takeLatest(AuthActionConstants.USER_LOGIN, userLoginGenerator);
  yield takeLatest(AuthActionConstants.USER_LOGOUT, userLogoutGenerator);
  yield takeLatest(AuthActionConstants.SAVE_USER_DATA, storeUserDataGenerator);
}

export default watchAllRequest;
