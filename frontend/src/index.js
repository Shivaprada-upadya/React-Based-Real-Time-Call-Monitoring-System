import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { CallProvider } from './context/CallContext'; // Import the context provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CallProvider>
      <App />
    </CallProvider>
  </React.StrictMode>
);
