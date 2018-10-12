import { combineReducers } from 'redux';
import { postsList } from './posts-list';
import { postSingle } from './post';

export const rootReducer = combineReducers({
  postsList,
  postSingle
});
