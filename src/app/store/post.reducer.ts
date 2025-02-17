import { createReducer, on } from '@ngrx/store';
import { loadPosts, loadPostsSuccess, loadPostsFailure } from './post.actions';
import { Post } from './post.model';

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

export const initialState: PostState = {
  posts: [],
  loading: false,
  error: null
};

export const postReducer = createReducer(
  initialState,
  on(loadPosts, (state) => ({ ...state, loading: true, error: null })),
  on(loadPostsSuccess, (state, { posts }) => ({ ...state, loading: false, posts })),
  on(loadPostsFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
