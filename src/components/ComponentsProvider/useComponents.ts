import React from 'react';
import { ComponentsContext } from './ComponentsContext';

export function useComponents() {
  return React.useContext(ComponentsContext);
}
