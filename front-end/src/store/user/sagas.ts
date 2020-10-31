import { put, takeLatest, call } from 'redux-saga/effects';
import { UserActionConstants } from './userActionConstants';
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
  commentPostSucceeded,
  commentPostFailed,
  deleteUserPostSucceeded,
  deleteUserPostFailed,
  fetchUserByIdSucceeded,
  fetchUserByIdFailed,
  followUserSucceeded,
  followUserFailed,
  unfollowUserSucceeded,
  unfollowUserFailed,
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

function* deletePost(action) {
  try {
    const postId = action.payload;
    const response = yield call(Api.deletePost, postId);
    yield put(deleteUserPostSucceeded(response));
  } catch (e) {
    yield put(deleteUserPostFailed(e));
  }
}

function* fetchAllPosts() {
  try {
    const response = yield call(Api.fetchAllPosts);
    const descendOrderOfPost = response.reverse();
    yield put(fetchAllPostsSucceeded(descendOrderOfPost));
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

function* commentUserPost(action) {
  try {
    const { postId, comment } = action.payload;
    const response = yield call(Api.commentUserPost, postId, comment);
    yield put(commentPostSucceeded(response));
  } catch (e) {
    yield put(commentPostFailed(e));
  }
}

function* fetchUserById(action) {
  try {
    const id = action.payload;
    const response = yield call(Api.fetchUserById, id);
    yield put(fetchUserByIdSucceeded(response));
  } catch (e) {
    yield put(fetchUserByIdFailed(e));
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

function* unfollowUserGenerator(action) {
  try {
    const followId = action.payload;
    const response = yield call(Api.unfollowUser, followId);
    yield put(unfollowUserSucceeded(response));
  } catch (e) {
    yield put(unfollowUserFailed(e));
  }
}

function* watchAllUserRequest() {
  yield takeLatest(UserActionConstants.CREATE_POST, getImageURL);
  yield takeLatest(UserActionConstants.FETCH_ALL_POSTS, fetchAllPosts);
  yield takeLatest(UserActionConstants.FETCH_USER_POSTS, fetchUserPosts);
  yield takeLatest(UserActionConstants.LIKE_USER_POST, likeUserPost);
  yield takeLatest(UserActionConstants.UNLIKE_USER_POST, unlikeUserPost);
  yield takeLatest(UserActionConstants.COMMENT_POST, commentUserPost);
  yield takeLatest(UserActionConstants.DELETE_USER_POST, deletePost);
  yield takeLatest(UserActionConstants.FETCH_USER_BY_ID, fetchUserById);
  yield takeLatest(UserActionConstants.FOLLOW_USER, followUserGenerator);
  yield takeLatest(UserActionConstants.UNFOLLOW_USER, unfollowUserGenerator);
}

export default watchAllUserRequest;
