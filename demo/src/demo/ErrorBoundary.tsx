import React, { useState } from 'react';
import { DemoPage, DemoSection } from '../components';
import { ErrorBoundary, FallbackProps } from '../../../src';

function BuggyCounter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((s) => s + 1);
  }

  if (counter === 5) {
    // Simulate a JS error
    throw new Error('I crashed!');
  }
  return (
    <button onClick={handleClick} type="button">
      {counter}
    </button>
  );
}

function ErrorFallback({ error, errorInfo }: FallbackProps) {
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

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </DemoSection>
    <DemoSection title="FallbackComponent">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <p>
          These two counters are inside the same error boundary. If one crashes, the error boundary
          will replace both of them.
        </p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
    </DemoSection>
  </DemoPage>
);
