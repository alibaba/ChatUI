import React from 'react';

export interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export interface FallbackProps {
  error: Error;
  errorInfo: React.ErrorInfo;
  [k: string]: any;
}

export type ErrorBoundaryProps = {
  FallbackComponent?: React.ComponentType<FallbackProps>;
  onError?: (error: Error, info: React.ErrorInfo) => void;
  [k: string]: any;
};

export class ErrorBoundary extends React.Component<
  React.PropsWithRef<React.PropsWithChildren<ErrorBoundaryProps>>,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

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
        return <FallbackComponent error={error!} errorInfo={errorInfo} {...rest} />;
      }

      return null;
    }

    return children;
  }
}
