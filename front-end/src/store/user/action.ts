import { action } from 'typesafe-actions';
import { User_Action_Constants } from './types';

export const createPost = (data: any) => action(User_Action_Constants.CREATE_POST, data);
export const createPostSucceeded = (data: any) => action(User_Action_Constants.CREATE_POST_SUCCEEDED, data);
export const createPostFailed = (message: string) => action(User_Action_Constants.CREATE_POST_FAILED, message);
