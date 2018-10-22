import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routes } from '../routes';

export default () => (
  <Fragment>
    {routes.map(({ path, component, exact }) => (
      <Route key={path} component={component} exact={exact} />
    ))}
  </Fragment>
);
