import { Reducer } from 'redux';
import { User_Action_Constants, UserState } from './types';

export const initialState: UserState = {
  errors: undefined,
  isCreatingNewPost: false,
  createdNewPost: false,
  isFetchingAllPosts: false,
  isCommenting: false,
  hasCommented: false,
  allPosts: [],
  userPosts: [],
  likes: [],
  comments: [],
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

    case User_Action_Constants.LIKE_USER_POST_SUCCEEDED: {
      return {
        ...state,
        likes: action.payload,
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
      };
    }

    case User_Action_Constants.COMMENT_POST_SUCCEEDED: {
      return {
        ...state,
        hasCommented: true,
        isCommenting: false,
        comments: action.payload,
      };
    }

    case User_Action_Constants.COMMENT_POST_FAILED: {
      return {
        ...state,
        hasCommented: false,
        isCommenting: false,
        errors: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as userReducer };
