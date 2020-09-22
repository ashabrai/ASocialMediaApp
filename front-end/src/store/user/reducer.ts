import { Reducer } from 'redux';
import { User_Action_Constants, UserState } from './ActionConstants';

export const initialState: UserState = {
  errors: undefined,
  isCreatingNewPost: false,
  createdNewPost: false,
  isFetchingAllPosts: false,
  isCommenting: false,
  hasCommented: false,
  currentPost: {},
  allPosts: [],
  userPosts: [],
  likes: [],
  comments: [],
  postId: null,
};

const reducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case User_Action_Constants.CREATE_POST: {
      return {
        ...state,
        isCreatingNewPost: true,
      };
    }

    case User_Action_Constants.CREATE_POST_SUCCEEDED: {
      return {
        ...state,
        isCreatingNewPost: false,
        createdNewPost: true,
      };
    }

    case User_Action_Constants.CREATE_POST_FAILED: {
      return {
        ...state,
        isCreatingNewPost: false,
        createdNewPost: false,
        errors: action.payload,
      };
    }

    case User_Action_Constants.FETCH_ALL_POSTS: {
      return {
        ...state,
        isFetchingAllPosts: true,
      };
    }

    case User_Action_Constants.FETCH_ALL_POSTS_SUCCEEDED: {
      return {
        ...state,
        isFetchingAllPosts: false,
        allPosts: action.payload,
      };
    }

    case User_Action_Constants.FETCH_ALL_POSTS_FAILED: {
      return {
        ...state,
        isFetchingAllPosts: false,
        allPosts: [],
        errors: action.payload,
      };
    }

    case User_Action_Constants.FETCH_USER_POSTS: {
      return {
        ...state,
        isFetchingUserPosts: true,
      };
    }

    case User_Action_Constants.FETCH_USER_POSTS_SUCCEEDED: {
      return {
        ...state,
        isFetchingUserPosts: false,
        userPosts: action.payload,
      };
    }

    case User_Action_Constants.FETCH_USER_POSTS_FAILED: {
      return {
        ...state,
        isFetchingUserPosts: false,
        userPosts: [],
      };
    }

    case User_Action_Constants.LIKE_USER_POST: {
      return {
        ...state,
        postId: action.payload.postId,
      };
    }

    case User_Action_Constants.LIKE_USER_POST_SUCCEEDED: {
      return {
        ...state,
        likedPost: true,
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

    case User_Action_Constants.LIKE_USER_POST_FAILED: {
      return {
        ...state,
        likes: [],
        errors: action.payload,
      };
    }
    case User_Action_Constants.UNLIKE_USER_POST_SUCCEEDED: {
      return {
        ...state,
        likes: action.payload,
      };
    }

    case User_Action_Constants.UNLIKE_USER_POST_FAILED: {
      return {
        ...state,
        likes: [],
        errors: action.payload,
      };
    }

    case User_Action_Constants.COMMENT_POST: {
      return {
        ...state,
        isCommenting: true,
        hasCommented: false,
        postId: action.payload.postId,
      };
    }

    case User_Action_Constants.COMMENT_POST_SUCCEEDED: {
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
        currentPost: action.payload,
      };
    }

    case User_Action_Constants.COMMENT_POST_FAILED: {
      return {
        ...state,
        hasCommented: false,
        isCommenting: false,
        errors: action.payload,
        currentPostId: '',
      };
    }

    case User_Action_Constants.DELETE_USER_POST_SUCCEEDED: {
      return {
        ...state,
        allPosts: action.payload,
      };
    }

    case User_Action_Constants.DELETE_USER_POST_FAILED: {
      return {
        ...state,
        errors: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export { reducer as userReducer };
