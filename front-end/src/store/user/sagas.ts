import { put, takeLatest, call } from 'redux-saga/effects';
import { User_Action_Constants } from './types';
import {
  createPostSucceeded,
  createPostFailed,
  fetchAllPostsSucceeded,
  fetchAllPostsFailed,
  fetchUserPostsSucceeded,
  fetchUserPostsFailed,
  likeUserPostSucceeded,
  likeUserPostFailed,
  unlikeUserPostSucceeded,
  unlikeUserPostFailed,
} from './action';

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

function* fetchUserPosts() {
  try {
    const response = yield call(Api.fetchUserPosts);
    yield put(fetchUserPostsSucceeded(response));
  } catch (e) {
    yield put(fetchUserPostsFailed(e));
  }
}

function* likeUserPost(action) {
  try {
    const id = action.payload;
    const response = yield call(Api.updateUserPostLikes, id);
    yield put(likeUserPostSucceeded(response));
  } catch (e) {
    yield put(likeUserPostFailed(e));
  }
}

function* unlikeUserPost(action) {
  try {
    const id = action.payload;
    const response = yield call(Api.updateUserPostUnlikes, id);
    yield put(unlikeUserPostSucceeded(response));
  } catch (e) {
    yield put(unlikeUserPostFailed(e));
  }
}

function* watchAllUserRequest() {
  yield takeLatest(User_Action_Constants.CREATE_POST, getImageURL);
  yield takeLatest(User_Action_Constants.FETCH_ALL_POSTS, fetchAllPosts);
  yield takeLatest(User_Action_Constants.FETCH_USER_POSTS, fetchUserPosts);
  yield takeLatest(User_Action_Constants.LIKE_USER_POST, likeUserPost);
  yield takeLatest(User_Action_Constants.UNLIKE_USER_POST, unlikeUserPost);
}

export default watchAllUserRequest;
