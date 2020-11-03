import { UserActionConstants } from './userActionConstants';
import {
  Post,
  UserData,
  CreatePostPayload,
  UserDataById,
  CreatePostAction,
  CreatePostSucceededAction,
  CreatePostFailedAction,
  FetchAllPostAction,
  FetchAllPostSucceededAction,
  FetchAllPostFailedAction,
  FetchUserPostAction,
  FetchUserPostSucceededAction,
  FetchUserPostFailedAction,
  LikeUserPostAction,
  LikeUserPostSucceededAction,
  LikeUserPostFailedAction,
  UnlikeUserPostAction,
  UnlikeUserPostSucceededAction,
  UnlikeUserPostFailedAction,
  CommentPostAction,
  CommentPostSucceededAction,
  CommentPostFailedAction,
  DeleteUserPostAction,
  DeleteUserPostSucceededAction,
  DeleteUserPostFailedAction,
  FetchUserByIdAction,
  FetchUserByIdSucceededAction,
  FetchUserByIdFailedAction,
  SetUserIdAction,
  UserPostLikes,
  FollowUserAction,
  FollowUserSucceededAction,
  FollowUserFailedAction,
  UnfollowUserAction,
  UnfollowUserSucceededAction,
  UnfollowUserFailedAction,
} from './types';

export function createPost(payload: CreatePostPayload): CreatePostAction {
  return {
    type: UserActionConstants.CREATE_POST,
    payload,
  };
}
export function createPostSucceeded(payload: Post): CreatePostSucceededAction {
  return {
    type: UserActionConstants.CREATE_POST_SUCCEEDED,
    payload: payload,
  };
}
export function createPostFailed(errors: string): CreatePostFailedAction {
  return {
    type: UserActionConstants.CREATE_POST_FAILED,
    errors,
  };
}

export function fetchAllPosts(): FetchAllPostAction {
  return {
    type: UserActionConstants.FETCH_ALL_POSTS,
  };
}
export function fetchAllPostsSucceeded(payload: Array<Post>): FetchAllPostSucceededAction {
  return {
    type: UserActionConstants.FETCH_ALL_POSTS_SUCCEEDED,
    payload,
  };
}
export function fetchAllPostsFailed(errors: string): FetchAllPostFailedAction {
  return {
    type: UserActionConstants.FETCH_ALL_POSTS_FAILED,
    errors,
  };
}

export function fetchUserPosts(): FetchUserPostAction {
  return {
    type: UserActionConstants.FETCH_USER_POSTS,
  };
}
export function fetchUserPostsSucceeded(payload: UserData): FetchUserPostSucceededAction {
  return {
    type: UserActionConstants.FETCH_USER_POSTS_SUCCEEDED,
    payload,
  };
}
export function fetchUserPostsFailed(errors: string): FetchUserPostFailedAction {
  return {
    type: UserActionConstants.FETCH_USER_POSTS_FAILED,
    errors,
  };
}

export function likeUserPost(payload: { postId: string }): LikeUserPostAction {
  return {
    type: UserActionConstants.LIKE_USER_POST,
    payload,
  };
}
export function likeUserPostSucceeded(payload: Array<UserPostLikes>): LikeUserPostSucceededAction {
  return {
    type: UserActionConstants.LIKE_USER_POST_SUCCEEDED,
    payload,
  };
}
export function likeUserPostFailed(errors: string): LikeUserPostFailedAction {
  return {
    type: UserActionConstants.LIKE_USER_POST_FAILED,
    errors,
  };
}

export function unlikeUserPost(payload: { postId: string }): UnlikeUserPostAction {
  return {
    type: UserActionConstants.UNLIKE_USER_POST,
    payload,
  };
}
export function unlikeUserPostSucceeded(payload: Array<Post>): UnlikeUserPostSucceededAction {
  return {
    type: UserActionConstants.UNLIKE_USER_POST_SUCCEEDED,
    payload,
  };
}
export function unlikeUserPostFailed(errors: string): UnlikeUserPostFailedAction {
  return {
    type: UserActionConstants.UNLIKE_USER_POST_FAILED,
    errors,
  };
}

export function commentPost(payload: { postId: string }): CommentPostAction {
  return {
    type: UserActionConstants.COMMENT_POST,
    payload,
  };
}
export function commentPostSucceeded(payload: Array<Post>): CommentPostSucceededAction {
  return {
    type: UserActionConstants.COMMENT_POST_SUCCEEDED,
    payload,
  };
}
export function commentPostFailed(errors: string): CommentPostFailedAction {
  return {
    type: UserActionConstants.COMMENT_POST_FAILED,
    errors,
  };
}

export function deleteUserPost(payload: string): DeleteUserPostAction {
  return {
    type: UserActionConstants.DELETE_USER_POST,
    payload,
  };
}
export function deleteUserPostSucceeded(payload: Array<Post>): DeleteUserPostSucceededAction {
  return {
    type: UserActionConstants.DELETE_USER_POST_SUCCEEDED,
    payload,
  };
}
export function deleteUserPostFailed(errors: string): DeleteUserPostFailedAction {
  return {
    type: UserActionConstants.DELETE_USER_POST_FAILED,
    errors,
  };
}

export function fetchUserById(payload: string): FetchUserByIdAction {
  return {
    type: UserActionConstants.FETCH_USER_BY_ID,
    payload,
  };
}
export function fetchUserByIdSucceeded(payload: UserDataById): FetchUserByIdSucceededAction {
  return {
    type: UserActionConstants.FETCH_USER_BY_ID_SUCCEEDED,
    payload,
  };
}
export function fetchUserByIdFailed(errors: string): FetchUserByIdFailedAction {
  return {
    type: UserActionConstants.FETCH_USER_BY_ID_FAILED,
    errors,
  };
}

export function setUserIdSelected(payload: string): SetUserIdAction {
  return {
    type: UserActionConstants.SET_USER_ID,
    payload,
  };
}

export function followUser(payload: string): FollowUserAction {
  return {
    type: UserActionConstants.FOLLOW_USER,
    payload,
  };
}
export function followUserSucceeded(payload: any): FollowUserSucceededAction {
  return {
    type: UserActionConstants.FOLLOW_USER_SUCCEEDED,
    payload,
  };
}
export function followUserFailed(payload: string): FollowUserFailedAction {
  return {
    type: UserActionConstants.FOLLOW_USER_FAILED,
    payload,
  };
}

export function unfollowUser(payload: string): UnfollowUserAction {
  return {
    type: UserActionConstants.UNFOLLOW_USER,
    payload,
  };
}
export function unfollowUserSucceeded(payload: any): UnfollowUserSucceededAction {
  return {
    type: UserActionConstants.UNFOLLOW_USER_SUCCEEDED,
    payload,
  };
}
export function unfollowUserFailed(payload: string): UnfollowUserFailedAction {
  return {
    type: UserActionConstants.UNFOLLOW_USER_FAILED,
    payload,
  };
}
