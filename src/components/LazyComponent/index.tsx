import React, { Suspense } from 'react';
import { ErrorBoundary } from '../..';
// eslint-disable-next-line import/no-cycle
import { useComponents } from '../ComponentsProvider';

interface LazyComponentBaseProps {
  fallback?: NonNullable<React.ReactNode> | null;
  onError?: (error: Error, info?: React.ErrorInfo) => void;
  [k: string]: any;
}

interface LazyComponentPropsWithComponent extends LazyComponentBaseProps {
  component: React.ComponentType;
}

interface LazyComponentPropsWithCode extends LazyComponentBaseProps {
  code: string;
  onLoad?: (e: { async: boolean }) => void;
}

export type LazyComponentProps = LazyComponentPropsWithComponent | LazyComponentPropsWithCode;

export const LazyComponent: React.FC<LazyComponentProps> = (props) => {
  const { getComponent } = useComponents();
  const { component, code, fallback, onLoad, onError, ...rest } = props;

  const Comp =
    component ||
    getComponent(code, (res) => {
      if ('async' in res && onLoad) {
        onLoad(res);
      } else if ('errCode' in res && onError) {
        onError(new Error(res.errCode));
      }
    });

  if (component && onLoad) {
    onLoad({ async: false, component });
  }

  return Comp ? (
    <ErrorBoundary onError={onError}>
      <Suspense fallback={fallback || null}>
        <Comp {...rest} />
      </Suspense>
    </ErrorBoundary>
  ) : null;
};

export default LazyComponent;
