import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BirdContextProvider } from './context/BirdContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BirdContextProvider>
    <App />
    </BirdContextProvider>
  </React.StrictMode>
);


