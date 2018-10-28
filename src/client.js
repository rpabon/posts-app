import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';
import { rootReducer } from './reducers';
import App from './containers/App';

const store = createStore(
  rootReducer,
  window.__REDUX_STORE__,
  applyMiddleware(thunkMiddleware, logger)
);

const clientApp = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.hydrate(clientApp, document.getElementById('root'));
