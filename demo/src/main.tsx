import React from 'react';
import ReactDOM from 'react-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { routerConfig } from './routerConfig';
import './index.less';
import '../../src/styles/index.less';

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
