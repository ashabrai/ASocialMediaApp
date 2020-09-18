import { createSelector } from 'reselect';

// export const selectedPostComments = (state) => state.comments;
export const selectedPost = (state) => state.currentPost;

// create selectedPostComments

export const selectedPostComments = (state) => state.currentPost.comments;
