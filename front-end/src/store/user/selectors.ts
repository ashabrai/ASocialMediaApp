// import { createSelector } from 'reselect';
import { ApplicationState } from 'store';

export const selectAllPosts = (state: ApplicationState) => state.user.allPosts;

export const selectCreatedNewPostStatus = (state: ApplicationState) => state.user.createdNewPost;

export const selectUserData = (state: ApplicationState) => state.user.userData;

export const selectHasCommented = (state: ApplicationState) => state.user.hasCommented;

export const selectHasLikedPost = (state: ApplicationState) => state.user.hasLikedPost;

export const selectUserByIdInfo = (state: ApplicationState) => state.user.userDataById;

export const selectUserIdByProfile = (state: ApplicationState) => state.user.userIdSelected; // this is the user id that was selected by profile
