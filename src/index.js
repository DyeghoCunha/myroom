import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes.js';
import './assets/fontes/GandhiSans-Regular.otf'
import './assets/fontes/GandhiSans-Bold.otf'
import '../src/principal.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);


