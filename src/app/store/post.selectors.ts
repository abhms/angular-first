import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.reducer';

export const selectPostState = createFeatureSelector<PostState>('post');

export const selectPosts = createSelector(selectPostState, (state) => state.posts);
export const selectLoading = createSelector(selectPostState, (state) => state.loading);
export const selectError = createSelector(selectPostState, (state) => state.error);
