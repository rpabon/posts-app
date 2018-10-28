import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router-dom';
import { rootReducer } from './reducers';
import App from './containers/App';

const htmlTemplate = reactDOM => `
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
      <script src="/main.js"></script>
  </body>
  </html>
`;

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

  const dom = renderToString(
    <Provider store={store}>
      <Router location={req.url} context={{}}>
        <App />
      </Router>
    </Provider>
  );

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(dom));
});

app.listen(1337);
