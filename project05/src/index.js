import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import firebase from './config/firebase';

console.log(firebase);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
