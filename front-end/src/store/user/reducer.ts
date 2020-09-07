import { Reducer } from 'redux';
import { User_Action_Constants, UserState } from './types';

export const initialState: UserState = {
  errors: undefined,
  isCreatingNewPost: false,
  createdNewPost: false,
  isFetchingAllPosts: false,
  allPosts: [],
  userPosts: [],
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
    default: {
      return state;
    }
  }
};

export { reducer as userReducer };
