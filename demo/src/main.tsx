import React from 'react';
import ReactDOM from 'react-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { routerConfig } from './routerConfig';
import './index.less';
import '../../src/styles/index.less';

const router = createHashRouter(routerConfig);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root'),
);
