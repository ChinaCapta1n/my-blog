import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './assets/less/index.less';

const root = ReactDOM.createRoot(document.getElementById('luffy'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);