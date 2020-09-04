import { put, takeLatest, call } from 'redux-saga/effects';
import { User_Action_Constants } from './types';
import { createPostSucceeded, createPostFailed, fetchAllPostsSucceeded, fetchAllPostsFailed } from './action';

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

function* fetchAllPosts() {
  try {
    const response = yield call(Api.fetchAllPosts);
    yield put(fetchAllPostsSucceeded(response));
  } catch (e) {
    yield put(fetchAllPostsFailed(e));
  }
}

function* watchAllUserRequest() {
  yield takeLatest(User_Action_Constants.CREATE_POST, getImageURL);
  yield takeLatest(User_Action_Constants.FETCH_ALL_POSTS, fetchAllPosts);
}

export default watchAllUserRequest;
