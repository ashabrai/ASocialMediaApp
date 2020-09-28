import { action } from 'typesafe-actions';
import { UserActionConstants } from './ActionConstants';

export const createPost = (data: any) => action(UserActionConstants.CREATE_POST, data);
export const createPostSucceeded = (data: any) => action(UserActionConstants.CREATE_POST_SUCCEEDED, data);
export const createPostFailed = (message: string) => action(UserActionConstants.CREATE_POST_FAILED, message);

export const fetchAllPosts = () => action(UserActionConstants.FETCH_ALL_POSTS);
export const fetchAllPostsSucceeded = (data: any) => action(UserActionConstants.FETCH_ALL_POSTS_SUCCEEDED, data);
export const fetchAllPostsFailed = (message: string) => action(UserActionConstants.FETCH_ALL_POSTS_FAILED, message);

export const fetchUserPosts = () => action(UserActionConstants.FETCH_USER_POSTS);
export const fetchUserPostsSucceeded = (data: any) => action(UserActionConstants.FETCH_USER_POSTS_SUCCEEDED, data);
export const fetchUserPostsFailed = (message: string) => action(UserActionConstants.FETCH_USER_POSTS_FAILED, message);

export const likeUserPost = (payload: { postId: string }) => action(UserActionConstants.LIKE_USER_POST, payload);
export const likeUserPostSucceeded = (likes: Array<{ _id: string }>) =>
  action(UserActionConstants.LIKE_USER_POST_SUCCEEDED, likes);
export const likeUserPostFailed = (message: string) => action(UserActionConstants.LIKE_USER_POST_FAILED, message);

export const unlikeUserPost = (payload: { postId: string }) => action(UserActionConstants.UNLIKE_USER_POST, payload);
export const unlikeUserPostSucceeded = (likes: Array<{ _id: string }>) =>
  action(UserActionConstants.UNLIKE_USER_POST_SUCCEEDED, likes);
export const unlikeUserPostFailed = (message: string) => action(UserActionConstants.UNLIKE_USER_POST_FAILED, message);

export const commentPost = (payload: { postId: string; comment: string }) =>
  action(UserActionConstants.COMMENT_POST, payload);
export const commentPostSucceeded = (data: any) => action(UserActionConstants.COMMENT_POST_SUCCEEDED, data);
export const commentPostFailed = (message: string) => action(UserActionConstants.COMMENT_POST_FAILED, message);

export const deleteUserPost = (id: string) => action(UserActionConstants.DELETE_USER_POST, id);
export const deleteUserPostSucceeded = (data: any) => action(UserActionConstants.DELETE_USER_POST_SUCCEEDED, data);
export const deleteUserPostFailed = (message: string) => action(UserActionConstants.DELETE_USER_POST_FAILED, message);
