import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { ErrorBoundary } from '../../src';

export default {
  title: 'ErrorBoundary',
  component: ErrorBoundary,
  decorators: [
    (Story) => (
      <div>
        <h3>My title</h3>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const WillCrashed = () => <BuggyCounter />;

export const NoFallback = () => (
  <ErrorBoundary>
    <BuggyCounter />
  </ErrorBoundary>
);

export const FallbackComponent = () => (
  <div>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BuggyCounter />
    </ErrorBoundary>
  </div>
);

export const NoError = (args) => (
  <ErrorBoundary {...args}>
    <p>no error</p>
  </ErrorBoundary>
);

// https://codepen.io/gaearon/pen/wqvxGa?editors=0010
class BuggyCounter extends React.Component<{}, { counter: number }> {
  state = { counter: 0 };

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  render() {
    const { counter } = this.state;
    if (counter === 5) {
      // Simulate a JS error
      throw new Error('I crashed!');
    }
    return <h1 onClick={this.handleClick}>{counter}</h1>;
  }
}

function ErrorFallback({ error, errorInfo }) {
  return (
    <div>
      <h2>Something went wrong.</h2>
      <details style={{ whiteSpace: 'pre-wrap' }}>
        {error && error.toString()}
        <br />
        {errorInfo.componentStack}
      </details>
    </div>
  );
}
