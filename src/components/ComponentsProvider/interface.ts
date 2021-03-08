import React from 'react';
import { LazyComponentResult } from '../../utils/lazyComponent';

interface ComponentInterfaceWithComponent {
  component: React.ComponentType<any>;
  type?: 'decorator';
}

interface ComponentInterfaceWithUrl {
  url: string;
  name: string;
}

interface ComponentInterfaceWithDecorator {
  decorator: string;
  data: any;
}

export type ComponentInterface =
  | ComponentInterfaceWithComponent
  | ComponentInterfaceWithUrl
  | ComponentInterfaceWithDecorator;

interface CallbackParamsWithAsync {
  code: string;
  async: boolean;
  component: React.ComponentType;
}

interface CallbackParamsWithError {
  code: string;
  errCode: string;
}

export interface GetComponentCallback {
  (e: CallbackParamsWithAsync | CallbackParamsWithError): void;
}

export interface ComponentsContextInterface {
  addComponent: (code: string, value: ComponentInterface) => void;
  getComponent: (
    code: string,
    callback?: GetComponentCallback,
  ) => React.ComponentType<any> | LazyComponentResult | null;
}

export interface ComponentsMap {
  [k: string]: ComponentInterface;
}

export interface ComponentsProviderProps {
  components: ComponentsMap;
}
