import { UserActionConstants } from './ActionConstants';
export interface Post {
  _id: string;
  photo: string;
  datePosted: string;
  body: string;
  comments: Array<{
    comment: string;
    postedBy: { _id: string; username: string };
    _id: string;
  }>;
  hasLikedPost: boolean;
  likes: Array<{
    _id: string;
    postedBy: string;
    username: string;
  }>;
}

export interface UserPost {
  body: string;
  comments: Array<{
    comment: string;
    postedBy: { _id: string; username: string };
    _id: string;
  }>;
  datePosted: string;
  likes: Array<{
    postedBy: string;
    username: string;
    _id: string;
  }>;
  photo: string;
  postedBy: string;
  title: string;
  _id: string;
}

export interface UserPostLikes {
  postedBy: string;
  username: string;
  _id: string;
}

export interface PostComments {
  comment: string;
  postedBy: string;
  _id: string;
}

export default interface UserState {
  readonly errors?: string;
  readonly isCreatingNewPost?: boolean;
  readonly createdNewPost?: boolean;
  readonly allPosts: Array<Post>;
  readonly isFetchingAllPosts: boolean;
  readonly userPosts: Array<UserPost>;
  readonly likes: Array<UserPostLikes>;
  readonly comments: Array<PostComments>;
  readonly hasCommented?: boolean;
  readonly isCommenting?: boolean;
  readonly postId: string;
  readonly hasLikedPost: boolean;
}

// User Action Constants and Shape
export interface CreatePostPayload {
  title: string;
  body: string;
  image: any;
}

export interface CreatePostAction {
  type: typeof UserActionConstants.CREATE_POST;
  payload: CreatePostPayload;
}
export interface CreatePostSucceededAction {
  type: typeof UserActionConstants.CREATE_POST_SUCCEEDED;
  payload: Post;
}
export interface CreatePostFailedAction {
  type: typeof UserActionConstants.CREATE_POST_FAILED;
  errors: string;
}

export interface FetchAllPostAction {
  type: typeof UserActionConstants.FETCH_ALL_POSTS;
}

export interface FetchAllPostSucceededAction {
  type: typeof UserActionConstants.FETCH_ALL_POSTS_SUCCEEDED;
  payload: Array<Post>;
}
export interface FetchAllPostFailedAction {
  type: typeof UserActionConstants.FETCH_ALL_POSTS_FAILED;
  errors: string;
}

export interface FetchUserPostAction {
  type: typeof UserActionConstants.FETCH_USER_POSTS;
  payload: { id: string };
}
export interface FetchUserPostSucceededAction {
  type: typeof UserActionConstants.FETCH_USER_POSTS_SUCCEEDED;
  payload: Array<UserPost>;
}
export interface FetchUserPostFailedAction {
  type: typeof UserActionConstants.FETCH_USER_POSTS_FAILED;
  errors: string;
}

export interface LikeUserPostAction {
  type: typeof UserActionConstants.LIKE_USER_POST;
  payload: { postId: string };
}
export interface LikeUserPostSucceededAction {
  type: typeof UserActionConstants.LIKE_USER_POST_SUCCEEDED;
  payload: Array<UserPostLikes>;
}
export interface LikeUserPostFailedAction {
  type: typeof UserActionConstants.LIKE_USER_POST_FAILED;
  errors: string;
}

export interface UnlikeUserPostAction {
  type: typeof UserActionConstants.UNLIKE_USER_POST;
  payload: { postId: string };
}
export interface UnlikeUserPostSucceededAction {
  type: typeof UserActionConstants.UNLIKE_USER_POST_SUCCEEDED;
  payload: Array<Post>;
}
export interface UnlikeUserPostFailedAction {
  type: typeof UserActionConstants.UNLIKE_USER_POST_FAILED;
  errors: string;
}

export interface CommentPostAction {
  type: typeof UserActionConstants.COMMENT_POST;
  payload: { postId: string };
}
export interface CommentPostSucceededAction {
  type: typeof UserActionConstants.COMMENT_POST_SUCCEEDED;
  payload: Array<Post>;
}
export interface CommentPostFailedAction {
  type: typeof UserActionConstants.COMMENT_POST_FAILED;
  errors: string;
}

export interface DeleteUserPostAction {
  type: typeof UserActionConstants.DELETE_USER_POST;
  payload: { postId: string };
}
export interface DeleteUserPostSucceededAction {
  type: typeof UserActionConstants.DELETE_USER_POST_SUCCEEDED;
  payload: Array<Post>;
}
export interface DeleteUserPostFailedAction {
  type: typeof UserActionConstants.DELETE_USER_POST_FAILED;
  errors: string;
}
