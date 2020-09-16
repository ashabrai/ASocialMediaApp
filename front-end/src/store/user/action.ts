import { action } from 'typesafe-actions';
import { User_Action_Constants } from './types';

export const createPost = (data: any) => action(User_Action_Constants.CREATE_POST, data);
export const createPostSucceeded = (data: any) => action(User_Action_Constants.CREATE_POST_SUCCEEDED, data);
export const createPostFailed = (message: String) => action(User_Action_Constants.CREATE_POST_FAILED, message);

export const fetchAllPosts = () => action(User_Action_Constants.FETCH_ALL_POSTS);
export const fetchAllPostsSucceeded = (data: any) => action(User_Action_Constants.FETCH_ALL_POSTS_SUCCEEDED, data);
export const fetchAllPostsFailed = (message: String) => action(User_Action_Constants.FETCH_ALL_POSTS_FAILED, message);

export const fetchUserPosts = () => action(User_Action_Constants.FETCH_USER_POSTS);
export const fetchUserPostsSucceeded = (data: any) => action(User_Action_Constants.FETCH_USER_POSTS_SUCCEEDED, data);
export const fetchUserPostsFailed = (message: String) => action(User_Action_Constants.FETCH_USER_POSTS_FAILED, message);

export const likeUserPost = (id: String) => action(User_Action_Constants.LIKE_USER_POST, id);
export const likeUserPostSucceeded = (data: any) => action(User_Action_Constants.LIKE_USER_POST_SUCCEEDED, data);
export const likeUserPostFailed = (message: String) => action(User_Action_Constants.LIKE_USER_POST_FAILED, message);

export const unlikeUserPost = (id: String) => action(User_Action_Constants.UNLIKE_USER_POST, id);
export const unlikeUserPostSucceeded = (data: any) => action(User_Action_Constants.UNLIKE_USER_POST_SUCCEEDED, data);
export const unlikeUserPostFailed = (message: String) => action(User_Action_Constants.UNLIKE_USER_POST_FAILED, message);

export const commentPost = (id: String, comment: String) => action(User_Action_Constants.COMMENT_POST, id, comment);
export const commentPostSucceeded = (data: any) => action(User_Action_Constants.COMMENT_POST_SUCCEEDED, data);
export const commentPostFailed = (message: String) => action(User_Action_Constants.COMMENT_POST_FAILED, message);
