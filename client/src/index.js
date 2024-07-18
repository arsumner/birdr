import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BirdContextProvider } from './context/BirdContext';
import { AuthContextProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BirdContextProvider>
        <App />
      </BirdContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);


