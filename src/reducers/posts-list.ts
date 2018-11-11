import { POSTS_PENDING, POSTS_SUCCESSFUL, POSTS_FAILURE } from '../constants';
import { PostsListState, PostsListAction, AppState } from '../interfaces';

const initialState: PostsListState = {
  posts: [],
  pending: false,
  error: null,
};

const posts = (
  state = initialState.posts,
  { type, payload }: PostsListAction
) => {
  switch (type) {
    case POSTS_SUCCESSFUL:
      return payload;

    default:
      return state;
  }
};

const pending = (state = initialState.pending, { type }: PostsListAction) => {
  switch (type) {
    case POSTS_PENDING:
      return true;

    case POSTS_SUCCESSFUL:
    case POSTS_FAILURE:
      return false;

    default:
      return state;
  }
};

const error = (
  state = initialState.error,
  { type, payload }: PostsListAction
) => {
  switch (type) {
    case POSTS_FAILURE:
      return payload;

    default:
      return state;
  }
};

export const getPostsFromState = (state: AppState) => state.postsList.posts;
export const getPendingFromState = (state: AppState) => state.postsList.pending;

export const postsList = (state = initialState, action: PostsListAction) => ({
  posts: posts(state.posts, action),
  pending: pending(state.pending, action),
  error: error(state.error, action),
});
