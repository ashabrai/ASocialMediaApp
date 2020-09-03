import { Reducer } from 'redux';
import { User_Action_Constants, UserState } from './types';

export const initialState: UserState = {
  errors: undefined,
  isCreatingNewPost: false,
  createdNewPost: false,
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
    default: {
      return state;
    }
  }
};

export { reducer as userReducer };
