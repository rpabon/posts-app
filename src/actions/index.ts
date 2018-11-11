import axios from 'axios';
import { Dispatch } from 'redux';
import { SinglePostType, AppState } from '../interfaces';
import {
  API_BASE_URL,
  POSTS_FAILURE,
  POSTS_PENDING,
  POSTS_SUCCESSFUL,
  POST_FAILURE,
  POST_PENDING,
  POST_SUCCESSFUL,
  COMMENTS_FAILURE,
  COMMENTS_PENDING,
  COMMENTS_SUCCESSFUL
} from '../constants';

export const getPosts = () => (dispatch: Dispatch) => {
  dispatch({ type: POSTS_PENDING });

  return axios
    .get(`${API_BASE_URL}/posts`)
    .then(({ data: posts }) =>
      dispatch({ type: POSTS_SUCCESSFUL, payload: posts })
    )
    .catch(error => dispatch({ type: POSTS_FAILURE, payload: error }));
};

export const getPost = (id: number) => (
  dispatch: Dispatch,
  getState: () => AppState
) => {
  const { postsList: { posts } } = getState();
  const post = posts.find((p: SinglePostType) => p.id === id);

  dispatch({ type: POST_PENDING });

  if (post) {
    return dispatch({ type: POST_SUCCESSFUL, payload: post });
  } else {
    return axios
      .get(`${API_BASE_URL}/posts/${id}`)
      .then(({ data }) => dispatch({ type: POST_SUCCESSFUL, payload: data }))
      .catch(error => dispatch({ type: POST_FAILURE, payload: error }));
  }
};

export const getComments = (postId: number) => (dispatch: Dispatch) => {
  dispatch({ type: COMMENTS_PENDING });

  return axios
    .get(`${API_BASE_URL}/posts/${postId}/comments`)
    .then(({ data: comments }) =>
      dispatch({ type: COMMENTS_SUCCESSFUL, payload: comments })
    )
    .catch(error => dispatch({ type: COMMENTS_FAILURE, payload: error }));
};
