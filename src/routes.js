import PostsList from './containers/PostsList';
import PostSingle from './containers/PostSingle';

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
