import { POSTS_PENDING, POSTS_SUCCESSFUL, POSTS_FAILURE } from '../constants';

const initialState = [
  {
    posts: [],
    pending: false,
    error: null
  }
];

const posts = (state = initialState.posts, { type, payload }) => {
  switch (type) {
    case POSTS_SUCCESSFUL:
      return payload;

    default:
      return state;
  }
};

const pending = (state = initialState.pending, { type }) => {
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

const error = (state = initialState.error, { type, error }) => {
  switch (type) {
    case POSTS_FAILURE:
      return error;

    default:
      return state;
  }
};

export const getPostsFromState = state => state.postsList.posts;
export const getPendingFromState = state => state.postsList.pending;

export const postsList = (state = initialState, action) => ({
  posts: posts(state.posts, action),
  pending: pending(state.pending, action),
  error: error(state.error, action)
});
