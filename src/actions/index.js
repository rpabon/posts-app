import axios from 'axios';
import {
  API_BASE_URL,
  POSTS_FAILURE,
  POSTS_PENDING,
  POSTS_SUCCESSFUL
} from '../constants';

export const getPosts = () => dispatch => {
  dispatch({ type: POSTS_PENDING });

  return axios
    .get(`${API_BASE_URL}/posts`)
    .then(({ data: posts }) =>
      dispatch({ type: POSTS_SUCCESSFUL, payload: posts })
    )
    .catch(error => dispatch({ type: POSTS_FAILURE, payload: error }));
};
