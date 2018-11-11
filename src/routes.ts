import PostsList from './containers/PostsList';
import PostSingle from './containers/PostSingle';

export const routes: AppRoute[] = [
  {
    path: '/',
    component: PostsList,
    exact: true,
  },
  {
    path: '/post/:id',
    component: PostSingle,
  },
];
