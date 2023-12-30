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
  addComponent: (code: ComponentKey, value: ComponentInterface) => void;
  hasComponent: (code: ComponentKey) => boolean;
  getComponent: (
    code: ComponentKey,
    callback?: GetComponentCallback,
  ) => React.ComponentType<any> | LazyComponentResult | null;
}

export enum ComponentKey {
  slot = 'slot',
  errorUrl = 'error-url',
  localComponent = 'local-component',
  myDecorator = 'my-decorator',
  testDecorator = 'test-decorator',
  testAsyncDecorator = 'test-async-decorator',
  recommend = 'recommend',
  noCode = 'no-code'
}

export type ComponentsMap = {
  [k in ComponentKey]?: ComponentInterface;
};

export interface ComponentsProviderProps {
  components: ComponentsMap;
  children?: React.ReactNode;
}
