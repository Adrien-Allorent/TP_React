import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Geo_API from './Geo_API';
import Weather_API from './Weather_API';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Weather_API />
  </React.StrictMode>
);

