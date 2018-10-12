import axios from 'axios';
import {
  API_BASE_URL,
  POSTS_FAILURE,
  POSTS_PENDING,
  POSTS_SUCCESSFUL,
  POST_FAILURE,
  POST_PENDING,
  POST_SUCCESSFUL
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

export const getPost = id => dispatch => {
  dispatch({ type: POST_PENDING });

  return axios
    .get(`${API_BASE_URL}/posts/${id}`)
    .then(({ data: post }) =>
      dispatch({ type: POST_SUCCESSFUL, payload: post })
    )
    .catch(error => dispatch({ type: POST_FAILURE, payload: error }));
};
