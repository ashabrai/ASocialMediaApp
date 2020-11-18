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
    if(!image || image === {}) { // this check is added in case the user does not initially load a photo on account creation
      const data = { name, username, email, password};
      yield call(createUserGenerator, data)
    } else {
      const postProfileImageToCloud = yield call(UserAPI.storeImageToCloud, image) // save the image to cloudinary
      const imgUrl = postProfileImageToCloud.url; // retrieve url from cloudinary response
      const data = { imgUrl, name, username, email, password}; // and use the image url for account creation
      yield call(createUserGenerator, data)
    }
  }catch(e){
    yield put(createUserFailed(e));

  }
}

function* createUserGenerator(data) {
  try {
    const response = yield call(Api.createUser, data);
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
