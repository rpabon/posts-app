import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes, AppRoute } from '../routes';

export default () => (
  <Switch>
    {routes.map((route: AppRoute) => (
      <Route key={route.path} {...route} />
    ))}
  </Switch>
);
