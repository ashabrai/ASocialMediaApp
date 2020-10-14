// import { createSelector } from 'reselect';
import { ApplicationState } from 'store';

export const selectAllPosts = (state: ApplicationState) => state.user.allPosts;

export const selectCreatedNewPostStatus = (state: ApplicationState) => state.user.createdNewPost;

export const selectUserPosts = (state: ApplicationState) => state.user.userPosts;

export const selectHasCommented = (state: ApplicationState) => state.user.hasCommented;

export const selectHasLikedPost = (state: ApplicationState) => state.user.hasLikedPost;

export const selectUserByIdInfo = (state: ApplicationState) => state.user.userDataById;

export const selectUserId = (state: ApplicationState) => state.user.userId;
