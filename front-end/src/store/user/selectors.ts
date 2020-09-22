// import { createSelector } from 'reselect';

import { ApplicationState } from 'store';

export const selectedPost = (state) => state.currentPost;

export const selectedPostComments = (state) => state.currentPost.comments;

export const selectAllPosts = (state: ApplicationState) => state.user.allPosts;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
