import { POST_FAILURE, POST_PENDING, POST_SUCCESSFUL } from '../constants';

const initialState = [
  {
    post: {
      userId: 0,
      id: 0,
      title: '',
      body: ''
    },
    pending: false,
    error: null
  }
];

const post = (state = initialState.post, { type, payload }) => {
  switch (type) {
    case POST_SUCCESSFUL:
      return payload;

    case POST_FAILURE:
    case POST_PENDING:
      return {};

    default:
      return state;
  }
};

const pending = (state = initialState.pending, { type }) => {
  switch (type) {
    case POST_PENDING:
      return true;

    case POST_SUCCESSFUL:
    case POST_FAILURE:
      return false;

    default:
      return state;
  }
};

const error = (state = initialState.error, { type, error }) => {
  switch (type) {
    case POST_FAILURE:
      return error;

    case POST_PENDING:
    case POST_SUCCESSFUL:
      return null;

    default:
      return state;
  }
};

export const getPostFromState = state => state.postSingle.post;
export const getPendingFromState = state => state.postSingle.pending;

export const postSingle = (state = initialState, action) => ({
  post: post(state.post, action),
  pending: pending(state.pending, action),
  error: error(state.error, action)
});
