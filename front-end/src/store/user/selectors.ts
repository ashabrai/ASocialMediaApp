// import { createSelector } from 'reselect';
import { ApplicationState } from 'store';

export const selectedPost = (state) => state.currentPost;

export const selectedPostComments = (state) => state.currentPost.comments;

export const selectAllPosts = (state: ApplicationState) => state.user.allPosts;

export const selectIsLoggedIn = (state: ApplicationState) => state.auth.isLoggedIn;

export const selectCreatedNewPostStatus = (state: ApplicationState) => state.user.createdNewPost;

export const selectHasBeenCreated = (state: ApplicationState) => state.auth.hasBeenCreated;
export const selectUserPosts = (state: ApplicationState) => state.user.userPosts;
