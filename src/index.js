import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';

// Pages
import Main from './pages/Main';

// React router
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Main />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


