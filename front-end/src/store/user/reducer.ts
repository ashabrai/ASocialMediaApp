import { Reducer } from 'redux';
import { UserActionConstants } from './userActionConstants';
import UserState from './types';

export const initialState: UserState = {
  errors: undefined,
  isCreatingNewPost: false,
  createdNewPost: false,
  isFetchingAllPosts: false,
  isCommenting: false,
  hasCommented: false,
  allPosts: [],
  userData: null,
  likes: [],
  hasLikedPost: false,
  comments: [],
  userDataById: null,
  postId: null,
  userIdSelected: '',
  followers: [],
  following: [],
  isFollowingUser: false,
  isUnfollowingUser: false,
  hasUnfollowedUser: false,
};

const userReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionConstants.CREATE_POST: {
      return {
        ...state,
        isCreatingNewPost: true,
      };
    }

    case UserActionConstants.CREATE_POST_SUCCEEDED: {
      return {
        ...state,
        isCreatingNewPost: false,
        createdNewPost: true,
      };
    }

    case UserActionConstants.CREATE_POST_FAILED: {
      return {
        ...state,
        isCreatingNewPost: false,
        createdNewPost: false,
        errors: action.payload.error,
      };
    }

    case UserActionConstants.FETCH_ALL_POSTS: {
      return {
        ...state,
        isFetchingAllPosts: true,
        createdNewPost: false,
      };
    }

    case UserActionConstants.FETCH_ALL_POSTS_SUCCEEDED: {
      return {
        ...state,
        isFetchingAllPosts: false,
        allPosts: action.payload,
      };
    }

    case UserActionConstants.FETCH_ALL_POSTS_FAILED: {
      return {
        ...state,
        isFetchingAllPosts: false,
        allPosts: [],
        errors: action.payload.error,
        createdNewPost: false,
      };
    }

    case UserActionConstants.FETCH_USER_POSTS: {
      return {
        ...state,
        isFetchingUserPosts: true,
      };
    }

    case UserActionConstants.FETCH_USER_POSTS_SUCCEEDED: {
      return {
        ...state,
        isFetchingUserPosts: false,
        userData: action.payload,
      };
    }

    case UserActionConstants.FETCH_USER_POSTS_FAILED: {
      return {
        ...state,
        isFetchingUserPosts: false,
        userData: {},
      };
    }

    case UserActionConstants.LIKE_USER_POST: {
      return {
        ...state,
        postId: action.payload.postId,
      };
    }

    case UserActionConstants.LIKE_USER_POST_SUCCEEDED: {
      return {
        ...state,
        hasLikedPost: true,
        allPosts: state.allPosts.map((item) => {
          if (item._id === state.postId) {
            return {
              ...item,
              likes: action.payload.likes,
            };
          }
          return item;
        }),
      };
    }

    case UserActionConstants.LIKE_USER_POST_FAILED: {
      return {
        ...state,
        errors: action.payload.error,
      };
    }

    case UserActionConstants.UNLIKE_USER_POST: {
      return {
        ...state,
        postId: action.payload.postId,
      };
    }
    case UserActionConstants.UNLIKE_USER_POST_SUCCEEDED: {
      return {
        ...state,
        hasLikedPost: false,
        allPosts: state.allPosts.map((item) => {
          if (item._id === state.postId) {
            return {
              ...item,
              likes: action.payload.likes,
            };
          }
          return item;
        }),
      };
    }

    case UserActionConstants.UNLIKE_USER_POST_FAILED: {
      return {
        ...state,
        errors: action.payload.error,
      };
    }

    case UserActionConstants.COMMENT_POST: {
      return {
        ...state,
        isCommenting: true,
        hasCommented: false,
        postId: action.payload.postId,
      };
    }

    case UserActionConstants.COMMENT_POST_SUCCEEDED: {
      // Article on how to accomplish updating allPosts
      // https://daveceddia.com/react-redux-immutability-guide/#:~:text=Redux%3A%20Update%20an%20object%20in%20an%20array&text=The%20only%20difference%20is%20we,as%20the%20new%20item's%20value.
      return {
        ...state,
        hasCommented: true,
        isCommenting: false,
        allPosts: state.allPosts.map((item) => {
          if (item._id === state.postId) {
            return {
              ...item,
              comments: action.payload.comments,
            };
          }
          return item;
        }),
      };
    }

    case UserActionConstants.COMMENT_POST_FAILED: {
      return {
        ...state,
        hasCommented: false,
        isCommenting: false,
        errors: action.payload,
        postId: null,
      };
    }

    case UserActionConstants.DELETE_USER_POST: {
      return {
        ...state,
        postId: action.payload,
      };
    }
    case UserActionConstants.DELETE_USER_POST_SUCCEEDED: {
      return {
        ...state,
        allPosts: state.allPosts.filter((item) => {
          return item._id !== state.postId;
        }),
      };
    }

    case UserActionConstants.DELETE_USER_POST_FAILED: {
      return {
        ...state,
        errors: action.payload.errors,
      };
    }

    case UserActionConstants.FETCH_USER_BY_ID: {
      return {
        ...state,
        userIdSelected: action.payload,
      };
    }

    case UserActionConstants.FETCH_USER_BY_ID_SUCCEEDED: {
      return {
        ...state,
        userDataById: action.payload,
      };
    }

    case UserActionConstants.FETCH_USER_BY_ID_FAILED: {
      return {
        ...state,
        userDataById: [],
        errors: action.payload.errors,
      };
    }

    case UserActionConstants.SET_USER_ID: {
      return {
        ...state,
        userIdSelected: action.payload,
      };
    }

    case UserActionConstants.FOLLOW_USER: {
      return {
        ...state,
        isFollowingUser: true,
      };
    }

    case UserActionConstants.FOLLOW_USER_SUCCEEDED: {
      return {
        ...state,
        isUnfollowingUser: false,
        hasUnfollowedUser: false,
        followers: action.payload.dataForCurrentUser.followers,
        following: action.payload.dataForCurrentUser.following,
        userDataById: {
          posts: [...state.userDataById.posts],
          user: {
            ...state.userDataById.user,
            followers: action.payload.dataForFollowId.followers,
            following: action.payload.dataForFollowId.following,
          },
        },
      };
    }

    case UserActionConstants.FOLLOW_USER_FAILED: {
      return {
        ...state,
        isFollowingUser: false,
        errors: action.payload.error,
      };
    }

    case UserActionConstants.UNFOLLOW_USER: {
      return {
        ...state,
        isUnfollowingUser: true,
      };
    }
    case UserActionConstants.UNFOLLOW_USER_SUCCEEDED: {
      return {
        ...state,
        isUnfollowingUser: false,
        hasUnfollowedUser: true,
        followers: action.payload.dataForCurrentUser.followers,
        following: action.payload.dataForCurrentUser.following,
        userDataById: {
          posts: [...state.userDataById.posts],
          user: {
            ...state.userDataById.user,
            isFollowingUser: false,
            followers: action.payload.dataForFollowId.followers,
            following: action.payload.dataForFollowId.following,
          },
        },
      };
    }
    case UserActionConstants.UNFOLLOW_USER_FAILED: {
      return {
        ...state,
        isUnfollowingUser: false,
        hasUnfollowedUser: false,
        errors: action.payload.error,

      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer as Reducer;
