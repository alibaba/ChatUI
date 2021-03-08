import React from 'react';
import { ComponentsContextInterface } from './interface';

export const ComponentsContext = React.createContext<ComponentsContextInterface>({
  addComponent: () => {},
  getComponent: () => null,
});
