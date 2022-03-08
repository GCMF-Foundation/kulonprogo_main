import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';

// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Custom Css
// import './index.css'
import './assets/css/style.css'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

