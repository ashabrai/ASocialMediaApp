import AuthReducer from 'store/auth/reducer';

import { AuthActionConstants } from 'store/auth/authActionConstants';

const initialStateMock = {
  authData: {
    name: '',
    username: '',
    email: '',
    image: '',
    _id: '',
  },
  errors: undefined,
  isBeingCreated: false,
  isBeingLoggedIn: false,
  isBeingLoggedOut: false,
  hasBeenCreated: false,
  isLoggedIn: false,
  isLoggedOut: false,
  userDataSaved: false,
  isUpdatingUserProfileImage: false,
};

describe('AuthReducer', () => {
  it('should have an initial state', () => {
    const actionMock = {
      type: null,
    };
    expect(AuthReducer(undefined, actionMock)).toEqual(initialStateMock);
  });

  it('The CREATE_USER action should set isBeingCreated to true', () => {
    const actionMock = {
      type: AuthActionConstants.CREATE_USER,
      payload: { email: 'test@mail.com', name: 'test', password: '1111', username: 'test', image: 'TEST.JPG' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      isBeingCreated: true,
    };
    expect(AuthReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });
  it('The CREATE_USER_SUCCEEDED action should correctly set the authData object with the correct values from the payload', () => {
    const actionMock = {
      type: AuthActionConstants.CREATE_USER_SUCCEEDED,
      payload: { name: 'testing', username: 'testing', email: 'testing@mail.com', image: 'TEST.JPG' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      isBeingCreated: false,
      hasBeenCreated: true,
      authData: actionMock.payload,
    };
    expect(AuthReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });
  it('The CREATE_USER_FAILED action should set isBeingCreated and hasBeenCreated to false and authData objects values set to empty strings and then set the error message to the errors property', () => {
    const actionMock = {
      type: AuthActionConstants.CREATE_USER_FAILED,
      payload: { error: 'Something went wrong' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      isBeingCreated: false,
      hasBeenCreated: false,
      authData: {
        name: '',
        username: '',
        email: '',
        image: '',
        _id: '',
      },
      errors: actionMock.payload.error,
    };
    expect(AuthReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });

  it('The USER_LOGIN action should set isBeingLoggedIn to true, isLoggedIn and hasBeenCreated to false', () => {
    const actionMock = {
      type: AuthActionConstants.USER_LOGIN,
      payload: { email: 'test@mail.com', password: 'testpw' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      isBeingLoggedIn: true,
      isLoggedIn: false,
      hasBeenCreated: false,
    };
    expect(AuthReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });
  it('The USER_LOGIN_SUCCEEDED action should set isBeingLoggedIn to false, isLoggedIn to true and set authData object to with the values received from payload', () => {
    const actionMock = {
      type: AuthActionConstants.USER_LOGIN_SUCCEEDED,
      payload: {
        name: 'test',
        username: 'test',
        email: 'test@mail.com',
        _id: '112121212',
      },
    };

    const updatedStateMock = {
      ...initialStateMock,
      isBeingLoggedIn: false,
      isLoggedIn: true,
      authData: actionMock.payload,
    };
    expect(AuthReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });
  it('The USER_LOGIN_FAILED action should set isBeingLoggedIn to false, isLoggedIn to false and setting errors with the proper message from payload', () => {
    const actionMock = {
      type: AuthActionConstants.USER_LOGIN_FAILED,
      payload: { error: 'Something wrong happened' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      isBeingLoggedIn: false,
      isLoggedIn: false,
      errors: actionMock.payload.error,
    };
    expect(AuthReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });

  it('The USER_LOGOUT action should set isBeingLoggedOut to true', () => {
    const actionMock = {
      type: AuthActionConstants.USER_LOGOUT,
    };

    const updatedStateMock = {
      ...initialStateMock,
      isBeingLoggedOut: true,
    };

    expect(AuthReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });
  it('The USER_LOGOUT_SUCCEEDED action should set isBeingLoggedOut and isLoggedIn to false and setting all properties of authData to empty strings', () => {
    const actionMock = {
      type: AuthActionConstants.USER_LOGOUT_SUCCEEDED,
    };

    const updatedStateMock = {
      ...initialStateMock,
      isBeingLoggedOut: false,
      isLoggedIn: false,
      authData: {
        name: '',
        username: '',
        email: '',
        image: '',
        _id: '',
      },
    };

    expect(AuthReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });
  it('The USER_LOGOUT_FAILED action should set isBeingLoggedOut to false and isLoggedIn to true and setting the payload to the errors object', () => {
    const actionMock = {
      type: AuthActionConstants.USER_LOGOUT_FAILED,
      payload: { error: 'Something went wrong while trying to logout' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      isBeingLoggedOut: false,
      isLoggedIn: true,
      errors: actionMock.payload.error,
    };

    expect(AuthReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });

  it('The SAVE_USER_DATA action should set userDataSaved to false', () => {
    const actionMock = {
      type: AuthActionConstants.SAVE_USER_DATA,
      payload: { name: 'test', username: 'test', email: 'test@mail.com', password: '1111', _id: '12121', image: 'testIMAGE.JPG' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      userDataSaved: false,
    };

    expect(AuthReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });
  it('The SAVE_USER_DATA_SUCCEEDED action should set the authData object with the payload values, and it should set userDataSaved and isLoggedIn to true', () => {
    const actionMock = {
      type: AuthActionConstants.SAVE_USER_DATA_SUCCEEDED,
      payload: { name: 'test', username: 'test', email: 'test@mail.com', password: '1111', _id: '12121', image: 'testIMAGE.JPG' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      isLoggedIn: true,
      userDataSaved: true,
      authData: actionMock.payload,
    };

    expect(AuthReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });
  it('The SAVE_USER_DATA_FAILED action should set all values in the authData object to empty strings, and isLoggedIn to false and finally append the payload error to the errors object', () => {
    const actionMock = {
      type: AuthActionConstants.SAVE_USER_DATA_FAILED,
      payload: { error: 'Something went wrong when trying to save' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      isLoggedIn: false,
      authData: {
        name: '',
        username: '',
        email: '',
        image: '',
        _id: '',
      },
      errors: actionMock.payload.error,
    };
    expect(AuthReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });

  it('The UPDATE_USER_PROFILE_IMAGE action should set isUpdatingUserProfileImage to true', () => {
    const actionMock = {
      type: AuthActionConstants.UPDATE_USER_PROFILE_IMAGE,
    }
    const updatedStateMock = {
      ...initialStateMock,
      isUpdatingUserProfileImage: true,
    };
    expect(AuthReducer(initialStateMock, actionMock)).toEqual(updatedStateMock)
  })
  it('The UPDATE_USER_PROFILE_IMAGE_SUCCEEDED action should set isUpdatingUserProfileImage to false and set the new payload to authData', () => {
    const actionMock = {
      type: AuthActionConstants.UPDATE_USER_PROFILE_IMAGE_SUCCEEDED,
      payload: { image: 'linkToImage.jpg', followers: [], following: [], _id: '2342342', email: 'test@mail.com', name: 'test', username: 'test'}
    }
    const updatedStateMock = {
      ...initialStateMock,
      isUpdatingUserProfileImage: false,
      authData: actionMock.payload
    };
    expect(AuthReducer(initialStateMock, actionMock)).toEqual(updatedStateMock)
  })
  it('The UPDATE_USER_PROFILE_IMAGE_FAILED action should set isUpdatingUserProfileImage to false', () => {
    const actionMock = {
      type: AuthActionConstants.UPDATE_USER_PROFILE_IMAGE_FAILED,
    }
    const updatedStateMock = {
      ...initialStateMock,
      isUpdatingUserProfileImage: false,
    };
    expect(AuthReducer(initialStateMock, actionMock)).toEqual(updatedStateMock)
  })
});
