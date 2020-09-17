import React from 'react';

export interface ErrorBoundaryProps {
  fallback?: React.ReactNode;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { fallback, children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return fallback || null;
    }
    return children;
  }
}
