import {
  COMMENTS_FAILURE,
  COMMENTS_PENDING,
  COMMENTS_SUCCESSFUL
} from '../constants';

const initialState = [
  {
    comments: [],
    pending: false,
    error: null
  }
];

const comments = (state = initialState.comments, { type, payload }) => {
  switch (type) {
    case COMMENTS_SUCCESSFUL:
      return payload;

    case COMMENTS_FAILURE:
    case COMMENTS_PENDING:
      return [];

    default:
      return state;
  }
};

const pending = (state = initialState.pending, { type }) => {
  switch (type) {
    case COMMENTS_PENDING:
      return true;

    case COMMENTS_SUCCESSFUL:
    case COMMENTS_FAILURE:
      return false;

    default:
      return state;
  }
};

const error = (state = initialState.error, { type, error }) => {
  switch (type) {
    case COMMENTS_FAILURE:
      return error;

    case COMMENTS_PENDING:
    case COMMENTS_SUCCESSFUL:
      return null;

    default:
      return state;
  }
};

export const getCommentsFromState = state => state.commentList.comments;
export const getPendingFromState = state => state.commentList.pending;

export const commentList = (state = initialState, action) => ({
  comments: comments(state.comments, action),
  pending: pending(state.pending, action),
  error: error(state.error, action)
});
