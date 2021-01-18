import React from 'react';
import { lazyComponent, LazyComponentResult } from '../../utils/lazyComponent';
// eslint-disable-next-line import/no-cycle
import { LazyComponent } from '../LazyComponent';

// Interface
interface ComponentInterfaceWithComponent {
  component: React.ComponentType<any>;
}

interface ComponentInterfaceWithUrl {
  url: string;
  name: string;
}

interface ComponentInterfaceWithDecorator {
  decorator: string;
  data: any;
}

type ComponentInterface =
  | ComponentInterfaceWithComponent
  | ComponentInterfaceWithUrl
  | ComponentInterfaceWithDecorator;

interface CallbackParamsWithAsync {
  async: boolean;
  component?: any;
}

interface CallbackParamsWithError {
  errCode: string;
}

interface GetComponentCallback {
  (e: CallbackParamsWithAsync | CallbackParamsWithError): void;
}

interface ComponentsContextInterface {
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

// Context
const ComponentsContext = React.createContext<ComponentsContextInterface>({
  addComponent: () => {},
  getComponent: () => null,
});

// Provider
export const ComponentsProvider: React.FC<ComponentsProviderProps> = (props) => {
  const { components, children } = props;
  const componentsRef = React.useRef(components || {});

  function addComponent(code: string, val: ComponentInterface) {
    componentsRef.current[code] = val;
  }

  function getComponent(code: string, callback: GetComponentCallback = () => {}) {
    const comp = componentsRef.current[code];

    // no component
    if (!comp) {
      callback({ errCode: 'NO_CODE' });
      return null;
    }

    //
    if ('component' in comp) {
      callback({ async: false, component: comp.component });
      return comp.component;
    }

    if ('decorator' in comp) {
      const component = (compProps: any) => (
        <LazyComponent code={comp.decorator} decoratorData={comp.data} {...compProps} />
      );

      componentsRef.current[code] = { component };
      return component;
    }

    if ('url' in comp) {
      const component = lazyComponent(
        comp.url,
        comp.name,
        () => {
          componentsRef.current[code] = { component };
          callback({ async: true, component });
        },
        () => {
          callback({ errCode: 'ERR_IMPORT_SCRIPT' });
        },
      );

      return component;
    }

    callback({ errCode: 'NO_HANDLER' });
    return null;
  }

  return (
    <ComponentsContext.Provider value={{ addComponent, getComponent }}>
      {children}
    </ComponentsContext.Provider>
  );
};

// Hooks
export function useComponents() {
  return React.useContext(ComponentsContext);
}
