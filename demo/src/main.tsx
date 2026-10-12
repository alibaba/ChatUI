import React from 'react';
import ReactDOM from 'react-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { routerConfig } from './routerConfig';
import { applyUrlParams } from './utils';
import '../../src/styles/index.less';
import './index.less';

applyUrlParams();

const router = createHashRouter(routerConfig, {
  future: {
    v7_relativeSplatPath: true,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
