/* eslint-disable @typescript-eslint/naming-convention */
export enum User_Action_Constants {
  CREATE_POST = '@@user/CREATE_POST',
  CREATE_POST_SUCCEEDED = '@@user/CREATE_POST_SUCCEEDED',
  CREATE_POST_FAILED = '@@user/CREATE_POST_FAILED',

  FETCH_ALL_POSTS = '@@user/FETCH_ALL_POSTS',
  FETCH_ALL_POSTS_SUCCEEDED = '@@user/FETCH_ALL_POSTS_SUCCEEDED',
  FETCH_ALL_POSTS_FAILED = '@@user/FETCH_ALL_POSTS_FAILED',

  FETCH_USER_POSTS = '@@user/FETCH_USER_POSTS',
  FETCH_USER_POSTS_SUCCEEDED = '@@user/FETCH_USER_POSTS_SUCCEEDED',
  FETCH_USER_POSTS_FAILED = '@@user/FETCH_USER_POSTS_FAILED',

  LIKE_USER_POST = '@@user/LIKE_USER_POST',
  LIKE_USER_POST_SUCCEEDED = '@@user/LIKE_USER_POST_SUCCEEDED',
  LIKE_USER_POST_FAILED = '@@user/LIKE_USER_POST_FAILED',

  UNLIKE_USER_POST = '@@user/UNLIKE_USER_POST',
  UNLIKE_USER_POST_SUCCEEDED = '@@user/UNLIKE_USER_POST_SUCCEEDED',
  UNLIKE_USER_POST_FAILED = '@@user/UNLIKE_USER_POST_FAILED',

  COMMENT_POST = '@@user/COMMENT_POST',
  COMMENT_POST_SUCCEEDED = '@@user/COMMENT_POST_SUCCEEDED',
  COMMENT_POST_FAILED = '@@user/COMMENT_POST_FAILED',
}

export interface UserState {
  readonly errors?: String;
  readonly isCreatingNewPost?: boolean;
  readonly createdNewPost?: boolean;
  readonly allPosts: Array<any>;
  readonly isFetchingAllPosts?: boolean;
  readonly userPosts: Array<String>;
  readonly likes: Array<String>;
  readonly comments: Array<String>;
  readonly hasCommented?: boolean;
  readonly isCommenting?: boolean;
  readonly currentPost: Object;
  readonly postId: any;
}
