import { put, takeLatest, call } from 'redux-saga/effects';
import { User_Action_Constants } from './types';
import { createPostSucceeded, createPostFailed } from './action';

import Api from './api';

function* getImageURL(action) {
  try {
    const { image, title, body } = action.payload;
    const postImageToCloud = yield call(Api.storeImageToCloud, image);
    const imgUrl = postImageToCloud.url;
    const data = { imgUrl, title, body };
    yield call(createPost, data);
  } catch (e) {
    yield put(createPostFailed(e));
  }
}

function* createPost(data) {
  try {
    const response = yield call(Api.createPost, data);
    yield put(createPostSucceeded(response));
  } catch (e) {
    yield put(createPostFailed(e));
  }
}

function* watchAllUserRequest() {
  yield takeLatest(User_Action_Constants.CREATE_POST, getImageURL);
}

export default watchAllUserRequest;
