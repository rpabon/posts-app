import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { StaticRouter as Router, matchPath } from 'react-router-dom';
import { rootReducer } from './reducers';
import App from './containers/App';
import { routes } from './routes';

const htmlTemplate = (reactDOM, reduxStore) => `
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Page Title</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
      <div id="root">${reactDOM}</div>
      <script>window.__REDUX_STORE__ = ${JSON.stringify(reduxStore)}</script>
      <script src="/main.js"></script>
  </body>
  </html>
`;

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {
  const { url } = req;
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
  const storeActions = routes
    .filter(route => matchPath(url, route))
    .map(route => route.component)
    .filter(component => component.serverFetch)
    .map(({ serverFetch }) => serverFetch(url));

  Promise.all(storeActions).then(() => {
    const reactDOM = renderToString(
      <Provider store={store}>
        <Router location={url} context={{}}>
          <App />
        </Router>
      </Provider>
    );
    const reduxStore = store.getState();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlTemplate(reactDOM, reduxStore));
  });
});

app.listen(1337);
