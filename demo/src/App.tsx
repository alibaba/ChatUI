import React from 'react';
import { useRoutes } from 'react-router-dom';
import DemoIndex from './components/DemoIndex';
import * as demos from './demo';
import { navConfig } from './navConfig';
import { toPascalCase } from './utils';

const routes = navConfig.reduce((prev: any, current) => [...prev, ...current.list], []);

export default function App() {
  const routesConfig = routes.map((route: any) => {
    const Comp = (demos as any)[toPascalCase(route.code)];
    return { path: `/${route.code}`, element: <Comp /> };
  });

  const element = useRoutes([{ path: '/', element: <DemoIndex /> }, ...routesConfig]);

  return element;
}
