import { combineReducers } from 'redux';
import { postsList } from './posts-list';
import { postSingle } from './post-single';
import { commentList } from './comments';

export const rootReducer = combineReducers({
  postsList,
  postSingle,
  commentList
});
