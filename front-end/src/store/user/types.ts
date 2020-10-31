import { UserActionConstants } from './userActionConstants';

export default interface UserState {
  readonly errors?: string;
  readonly isCreatingNewPost?: boolean;
  readonly createdNewPost?: boolean;
  readonly allPosts: Array<Post>;
  readonly isFetchingAllPosts: boolean;
  readonly userData: UserData;
  readonly likes: Array<UserPostLikes>;
  readonly comments: Array<PostComments>;
  readonly hasCommented?: boolean;
  readonly isCommenting?: boolean;
  readonly postId: string;
  readonly hasLikedPost: boolean;
  readonly userDataById: UserDataById;
  readonly userIdSelected: string;
  readonly isFollowingUser: boolean;
  readonly followers: any;
  readonly following: any;
  readonly isUnfollowingUser: boolean;
  readonly hasUnfollowedUser: boolean;
}

export interface Post {
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

export interface UserData {
  data: {
    user: {
      email: string;
      followers: Array<{
        _id: string;
        username: string;
      }>;
      following: Array<{
        _id: string;
      }>;
      name: string;
      username: string;
      _id: string;
    };
    posts: Array<{
      body: string;
      comments: Array<{
        username: string;
        comment: string;
        postedBy: string;
        _id: string;
      }>;
      datePosted: number;
      likes: Array<{
        _id: string;
        postedBy: string;
        username: string;
      }>;
      photo: string;
      postedBy: {
        _id: string;
        name: string;
      };
      title: string;
      _id: string;
    }>;
  };
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

export interface UserDataById {
  userDataById: {
    user: {
      email: string;
      followers: Array<{
        _id: string;
        username: string;
      }>;
      following: Array<{
        _id: string;
      }>;
      name: string;
      username: string;
      _id: string;
    };
    posts: Array<{
      body: string;
      comments: Array<{
        username: string;
        comment: string;
        postedBy: string;
        _id: string;
      }>;
      datePosted: number;
      likes: Array<{
        _id: string;
        postedBy: string;
        username: string;
      }>;
      photo: string;
      postedBy: {
        _id: string;
        name: string;
      };
      title: string;
      _id: string;
    }>;
  };
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
}
export interface FetchUserPostSucceededAction {
  type: typeof UserActionConstants.FETCH_USER_POSTS_SUCCEEDED;
  payload: UserData;
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
  payload: string;
}
export interface DeleteUserPostSucceededAction {
  type: typeof UserActionConstants.DELETE_USER_POST_SUCCEEDED;
  payload: Array<Post>;
}
export interface DeleteUserPostFailedAction {
  type: typeof UserActionConstants.DELETE_USER_POST_FAILED;
  errors: string;
}

export interface FetchUserByIdAction {
  type: typeof UserActionConstants.FETCH_USER_BY_ID;
  payload: string;
}
export interface FetchUserByIdSucceededAction {
  type: typeof UserActionConstants.FETCH_USER_BY_ID_SUCCEEDED;
  payload: UserDataById;
}
export interface FetchUserByIdFailedAction {
  type: typeof UserActionConstants.FETCH_USER_BY_ID_FAILED;
  errors: string;
}

export interface SetUserIdAction {
  type: typeof UserActionConstants.SET_USER_ID;
  payload: string;
}

export interface FollowUserAction {
  type: typeof UserActionConstants.FOLLOW_USER;
  payload: string;
}
export interface FollowUserSucceededAction {
  type: typeof UserActionConstants.FOLLOW_USER_SUCCEEDED;
  payload: { any };
}
export interface FollowUserFailedAction {
  type: typeof UserActionConstants.FOLLOW_USER_FAILED;
  payload: string;
}

export interface UnfollowUserAction {
  type: typeof UserActionConstants.UNFOLLOW_USER;
  payload: string;
}
export interface UnfollowUserSucceededAction {
  type: typeof UserActionConstants.UNFOLLOW_USER_SUCCEEDED;
  payload: { any };
}
export interface UnfollowUserFailedAction {
  type: typeof UserActionConstants.UNFOLLOW_USER_FAILED;
  payload: string;
}
