import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureProductsStore from './store/products-store';

configureProductsStore();

ReactDOM.render(
    <BrowserRouter basename="/context_api_exercise">
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);
