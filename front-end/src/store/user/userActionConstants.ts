export enum UserActionConstants {
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

  DELETE_USER_POST = '@@user/DELETE_USER_POST',
  DELETE_USER_POST_SUCCEEDED = '@@user/DELETE_USER_POST_SUCCEEDED',
  DELETE_USER_POST_FAILED = '@@user/DELETE_USER_POST_FAILED',

  FETCH_USER_BY_ID = '@@user/FETCH_USER_BY_ID',
  FETCH_USER_BY_ID_SUCCEEDED = '@@user/FETCH_USER_BY_ID_SUCCEEDED',
  FETCH_USER_BY_ID_FAILED = '@@user/FETCH_USER_BY_ID_FAILED',

  SET_USER_ID = '@@user/SET_USER_ID',

  FOLLOW_USER = '@user/FOLLOW_USER',
  FOLLOW_USER_SUCCEEDED = '@user/FOLLOW_USER_SUCCEEDED',
  FOLLOW_USER_FAILED = '@user/FOLLOW_USER_FAILED',

  UNFOLLOW_USER = '@user/UNFOLLOW_USER',
  UNFOLLOW_USER_SUCCEEDED = '@user/UNFOLLOW_USER_SUCCEEDED',
  UNFOLLOW_USER_FAILED = '@user/UNFOLLOW_USER_FAILED',
}
