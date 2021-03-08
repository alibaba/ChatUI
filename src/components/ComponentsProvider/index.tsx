import React from 'react';
import { lazyComponent } from '../../utils/lazyComponent';
import { LazyComponentWithCode } from '../LazyComponent';
import { ComponentsContext } from './ComponentsContext';
import {
  ComponentInterface,
  GetComponentCallback,
  ComponentsProviderProps,
  ComponentsMap,
} from './interface';

export { useComponents } from './useComponents';
export type { ComponentsProviderProps, ComponentsMap };

export const ComponentsProvider: React.FC<ComponentsProviderProps> = (props) => {
  const { components, children } = props;
  const componentsRef = React.useRef(components || {});

  function addComponent(code: string, val: ComponentInterface) {
    componentsRef.current[code] = val;
  }

  function hasComponent(code: string) {
    return componentsRef.current.hasOwnProperty(code);
  }

  function getComponent(code: string, callback: GetComponentCallback = () => {}) {
    const comp = componentsRef.current[code];

    // no component
    if (!comp) {
      callback({ code, errCode: 'NO_CODE' });
      return null;
    }

    if ('component' in comp) {
      if (comp.type !== 'decorator') {
        callback({ code, async: false, component: comp.component });
      }
      return comp.component;
    }

    if ('decorator' in comp) {
      const component = (compProps: any) => (
        <LazyComponentWithCode
          code={comp.decorator}
          decoratorData={comp.data}
          onLoad={callback}
          {...compProps}
        />
      );

      componentsRef.current[code] = { component, type: 'decorator' };
      return component;
    }

    if ('url' in comp) {
      const component = lazyComponent(
        comp.url,
        comp.name,
        () => {
          componentsRef.current[code] = { component };
          callback({ code, async: true, component });
        },
        () => {
          callback({ code, errCode: 'ERR_IMPORT_SCRIPT' });
        },
      );

      return component;
    }

    callback({ code, errCode: 'NO_HANDLER' });
    return null;
  }

  return (
    <ComponentsContext.Provider value={{ addComponent, hasComponent, getComponent }}>
      {children}
    </ComponentsContext.Provider>
  );
};
