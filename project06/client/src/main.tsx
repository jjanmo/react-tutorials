import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@hazae41/symbol-dispose-polyfill';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
