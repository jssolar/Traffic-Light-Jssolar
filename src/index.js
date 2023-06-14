import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/index.css';
import reportWebVitals from './reportWebVitals';
import Semaforo from './components/Semaforo.jsx';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Semaforo />  
    </>
  </React.StrictMode>
);

reportWebVitals();
