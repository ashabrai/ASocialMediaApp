import { ApplicationState } from 'store';

export const selectedUserId = (state: ApplicationState) => state.auth.authData._id;
