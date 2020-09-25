import { action } from 'typesafe-actions';
import { User_Action_Constants } from './ActionConstants';

export const createPost = (data: any) => action(User_Action_Constants.CREATE_POST, data);
export const createPostSucceeded = (data: any) => action(User_Action_Constants.CREATE_POST_SUCCEEDED, data);
export const createPostFailed = (message: string) => action(User_Action_Constants.CREATE_POST_FAILED, message);

export const fetchAllPosts = () => action(User_Action_Constants.FETCH_ALL_POSTS);
export const fetchAllPostsSucceeded = (data: any) => action(User_Action_Constants.FETCH_ALL_POSTS_SUCCEEDED, data);
export const fetchAllPostsFailed = (message: string) => action(User_Action_Constants.FETCH_ALL_POSTS_FAILED, message);

export const fetchUserPosts = () => action(User_Action_Constants.FETCH_USER_POSTS);
export const fetchUserPostsSucceeded = (data: any) => action(User_Action_Constants.FETCH_USER_POSTS_SUCCEEDED, data);
export const fetchUserPostsFailed = (message: string) => action(User_Action_Constants.FETCH_USER_POSTS_FAILED, message);

export const likeUserPost = (id: string) => action(User_Action_Constants.LIKE_USER_POST, id);
export const likeUserPostSucceeded = (data: any) => action(User_Action_Constants.LIKE_USER_POST_SUCCEEDED, data);
export const likeUserPostFailed = (message: string) => action(User_Action_Constants.LIKE_USER_POST_FAILED, message);

export const unlikeUserPost = (id: string) => action(User_Action_Constants.UNLIKE_USER_POST, id);
export const unlikeUserPostSucceeded = (data: any) => action(User_Action_Constants.UNLIKE_USER_POST_SUCCEEDED, data);
export const unlikeUserPostFailed = (message: string) => action(User_Action_Constants.UNLIKE_USER_POST_FAILED, message);

export const commentPost = (id: string, comment: string) => action(User_Action_Constants.COMMENT_POST, id, comment);
export const commentPostSucceeded = (data: any) => action(User_Action_Constants.COMMENT_POST_SUCCEEDED, data);
export const commentPostFailed = (message: string) => action(User_Action_Constants.COMMENT_POST_FAILED, message);

export const deleteUserPost = (id: string) => action(User_Action_Constants.DELETE_USER_POST, id);
export const deleteUserPostSucceeded = (data: any) => action(User_Action_Constants.DELETE_USER_POST_SUCCEEDED, data);
export const deleteUserPostFailed = (message: string) => action(User_Action_Constants.DELETE_USER_POST_FAILED, message);
