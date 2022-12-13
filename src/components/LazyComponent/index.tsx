import React from 'react';
import { SuspenseWrap } from './SuspenseWrap';
import {
  LazyComponentProps,
  LazyComponentPropsWithCode,
  LazyComponentOnLoadParams,
} from './interface';
import { useComponents } from '../ComponentsProvider/useComponents';

export type { LazyComponentProps, LazyComponentOnLoadParams };

export const LazyComponentWithCode = (props: LazyComponentPropsWithCode) => {
  const { code, fallback, onLoad, onError, ...rest } = props;
  const { getComponent } = useComponents();

  const Comp = getComponent(code, (res) => {
    if ('async' in res && onLoad) {
      onLoad(res);
    } else if ('errCode' in res && onError) {
      onError(new Error(res.errCode));
    }
  });

  return <SuspenseWrap component={Comp} onError={onError} fallback={fallback} {...rest} />;
};

export const LazyComponent = (props: LazyComponentProps) => {
  const { component, code, onLoad, ...rest } = props;

  if (component) {
    if (onLoad) {
      onLoad({ async: false, component });
    }
    return <SuspenseWrap component={component} {...rest} />;
  }

  return <LazyComponentWithCode code={code} onLoad={onLoad} {...rest} />;
};

export default LazyComponent;
