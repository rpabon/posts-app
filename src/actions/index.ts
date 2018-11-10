import axios from 'axios';
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
  COMMENTS_SUCCESSFUL,
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

export const getPost = id => (dispatch, getState) => {
  const { postsList: { posts } } = getState();
  const post = Array.isArray(posts) && posts.find(post => post.id == id);

  dispatch({ type: POST_PENDING });

  if (post) {
    return dispatch({ type: POST_SUCCESSFUL, payload: post });
  } else {
    return axios
      .get(`${API_BASE_URL}/posts/${id}`)
      .then(({ data: post }) =>
        dispatch({ type: POST_SUCCESSFUL, payload: post })
      )
      .catch(error => dispatch({ type: POST_FAILURE, payload: error }));
  }
};

export const getComments = postId => dispatch => {
  dispatch({ type: COMMENTS_PENDING });

  return axios
    .get(`${API_BASE_URL}/posts/${postId}/comments`)
    .then(({ data: comments }) =>
      dispatch({ type: COMMENTS_SUCCESSFUL, payload: comments })
    )
    .catch(error => dispatch({ type: COMMENTS_FAILURE, payload: error }));
};
