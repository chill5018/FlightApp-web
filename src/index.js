import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';
import App from './app';
import './styles/_base.scss';

const middleware = process.env.NODE_ENV === 'development' ? [logger, thunk] : [thunk];
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();
