/* eslint-disable @typescript-eslint/naming-convention */
export enum User_Action_Constants {
  CREATE_POST = '@@user/CREATE_POST',
  CREATE_POST_SUCCEEDED = '@@user/CREATE_POST_SUCCEEDED',
  CREATE_POST_FAILED = '@@user/CREATE_POST_FAILED',

  FETCH_ALL_POSTS = '@@user/FETCH_ALL_POSTS',
  FETCH_ALL_POSTS_SUCCEEDED = '@@user/FETCH_ALL_POSTS_SUCCEEDED',
  FETCH_ALL_POSTS_FAILED = '@@user/FETCH_ALL_POSTS_FAILED',
}

export interface UserState {
  readonly errors?: String;
  readonly isCreatingNewPost?: boolean;
  readonly createdNewPost?: boolean;
  readonly allPosts: Array<String>;
  readonly isFetchingAllPosts?: boolean;
}
