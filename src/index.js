import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const title = 'Welcome to the beginning';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app'),
);

module.hot.accept();
