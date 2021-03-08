import React from 'react';
import { ComponentsContextInterface } from './interface';

export const ComponentsContext = React.createContext<ComponentsContextInterface>({
  addComponent: () => {},
  hasComponent: () => false,
  getComponent: () => null,
});
