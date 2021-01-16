import React from 'react';

export type ErrorBoundaryState = {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
};

type FallbackProps = ErrorBoundaryState;

export type ErrorBoundaryProps = {
  FallbackComponent?: React.ComponentType<FallbackProps>;
  onError?: (error: Error, info: React.ErrorInfo) => void;
  [k: string]: any;
};

export class ErrorBoundary extends React.Component<
  React.PropsWithRef<React.PropsWithChildren<ErrorBoundaryProps>>,
  ErrorBoundaryState
> {
  state = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const { onError } = this.props;
    if (onError) {
      onError(error, errorInfo);
    }
    this.setState({ error, errorInfo });
  }

  render() {
    const { FallbackComponent, children, ...rest } = this.props;
    const { error, errorInfo } = this.state;

    if (errorInfo) {
      if (FallbackComponent) {
        return <FallbackComponent error={error} errorInfo={errorInfo} {...rest} />;
      }

      return null;
    }

    return children;
  }
}
