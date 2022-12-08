import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './App';

import './assets/less/index.less';

const root = ReactDOM.createRoot(document.getElementById('luffy'));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
    
  </React.StrictMode>
);