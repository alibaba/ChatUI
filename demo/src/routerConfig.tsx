import React from 'react';
import DemoIndex from './components/DemoIndex';
import * as demos from './demo';
import { navConfig } from './navConfig';
import { toPascalCase } from './utils';

export const routerConfig = navConfig.reduce(
  (prev, current) => {
    const currentList = current.list.map((item: any) => {
      const Comp = (demos as any)[toPascalCase(item.code)];
      return { path: item.code, element: <Comp /> };
    });
    return [...prev, ...currentList];
  },
  [{ path: '/', element: <DemoIndex /> }],
);
