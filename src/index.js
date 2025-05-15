import React from 'react';
import ReactDOM from 'react-dom/client';
// Only import the output.css which contains the processed Tailwind styles
import './output.css';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
