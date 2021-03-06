import { put, takeLatest, call, select } from 'redux-saga/effects';
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
  updateUserProfileImageSucceeded,
  updateUserProfileImageFailed
} from './action';
import { selectedUserId } from 'store/auth/selectors'
import Api from './api';
import UserAPI from 'store/user/api';

function* getProfileImageURLForAccountCreation(action) {
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

function* getProfileImageURLForUpdate(action) {
  try{
    const image = action.payload;
    const postUpdatedImageToCloud = yield call(UserAPI.storeImageToCloud, image)
    const imageUrl = postUpdatedImageToCloud.url;
    const userId = yield select(selectedUserId);
    const payload = { imageUrl, userId}
    const response = yield call(Api.updateProfileImage, payload);
    // Due to using LS, these lines 83-85 are needed because even if the user successfully updates their profile image, LS will not update the image property unless we set it.
    const localStorageValues = JSON.parse(localStorage.getItem('user')) 
    localStorageValues.image = imageUrl;
    localStorage.setItem('user', JSON.stringify(localStorageValues))
    yield put(updateUserProfileImageSucceeded(response))
  }catch(err){
    yield put(updateUserProfileImageFailed(err))
  }
}

function* watchAllRequest() {
  yield takeLatest(AuthActionConstants.CREATE_USER, getProfileImageURLForAccountCreation);
  yield takeLatest(AuthActionConstants.USER_LOGIN, userLoginGenerator);
  yield takeLatest(AuthActionConstants.USER_LOGOUT, userLogoutGenerator);
  yield takeLatest(AuthActionConstants.SAVE_USER_DATA, storeUserDataGenerator);
  yield takeLatest(AuthActionConstants.UPDATE_USER_PROFILE_IMAGE, getProfileImageURLForUpdate)
}

export default watchAllRequest;
