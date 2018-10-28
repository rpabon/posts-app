import PostsList from './containers/PostsList';
import PostSingle from './containers/PostSingle';
import { getPosts } from './actions';

export const routes = [
  {
    path: '/',
    component: PostsList,
    exact: true
  },
  {
    path: '/post/:id',
    component: PostSingle
  }
];
