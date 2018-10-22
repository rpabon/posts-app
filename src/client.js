import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './reducers';
import App from './containers/App';

const store = createStore(
  rootReducer,
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