import React from 'react';
import { importScript } from './importScript';

export type LazyComponentResult = React.LazyExoticComponent<React.ComponentType<any>> & {
  WrappedComponent?: React.ComponentType<any>;
};

export function lazyComponent(
  url: string,
  name: string,
  success?: () => void,
  fail?: (err: Error) => void,
) {
  const ret: LazyComponentResult = React.lazy(() =>
    importScript(url, name)
      .then((res: any) => {
        if (!res.default) {
          throw new Error(`Failed to import ${name} component: no default export`);
        }

        ret.WrappedComponent = res.default || res;

        if (success) {
          success();
        }
        return res;
      })
      .catch((err: any) => {
        if (fail) {
          fail(err);
        }
        return { default: () => <></> };
      }),
  );

  return ret;
}
