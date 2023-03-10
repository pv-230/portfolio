import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyle from './common/global-styles';
import App from './components/app';
import './reset.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
