import { ApplicationState } from 'store';

export const selectedUserId = (state: ApplicationState) => state.auth.authData._id;
export const selectUserInfo = (state: ApplicationState) => state.auth.authData;
export const selectIsLoggedIn = (state: ApplicationState) => state.auth.isLoggedIn;
export const selectHasBeenCreated = (state: ApplicationState) => state.auth.hasBeenCreated;
