import AuthReducer from 'store/auth/reducer';

import { AuthActionConstants } from 'store/auth/authActionConstants';

const initialStateMock = {
  authData: {
    name: '',
    username: '',
    email: '',
    token: '',
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
      payload: { email: 'test@mail.com', name: 'test', password: '1111', username: 'test' },
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
      payload: { name: 'testing', username: 'testing', email: 'testing@mail.com', token: '12313123' },
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
        token: '',
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
});
