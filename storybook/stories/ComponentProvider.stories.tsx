import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import * as ChatUI from '../../src';
import { ComponentsMap } from '../../src';

const { ComponentsProvider, useComponents, LazyComponent } = ChatUI;

export default {
  title: 'ComponentsProvider',
  component: ComponentsProvider,
} as Meta;

// for Alime Component
declare global {
  interface Window {
    ChatUI: any;
  }
}

window.React = React;
window.ChatUI = ChatUI;

const ctx = {
  ui: {
    scrollToEnd: () => {},
  },
  log: {
    expo: () => {},
  },
};

// components
const components: ComponentsMap = {
  slot: {
    name: 'AlimeComponentSlot',
    url: '//g.alicdn.com/alime-components/slot/0.1.3/index.js',
  },
  'error-url': {
    name: 'AlimeComponentPromptAccess',
    url: '//g.alicdn.com/alime-components/slot/0.1.3/no-index.js',
  },
  'local-component': {
    component: ({ data }: { data: string }) => <p>local component: {data}</p>,
  },
  'my-decorator': {
    component: (props) => (
      <div>
        <h2>`my-decorator`</h2>
        <p>props:</p>
        <pre>{JSON.stringify(props, null, 4)}</pre>
      </div>
    ),
  },
  'test-decorator': {
    decorator: 'my-decorator',
    data: {
      jsonUrl: 'this is a url',
      d1: 'd1',
      d2: 'd2',
    },
  },
};

function TestLocalComponent() {
  return (
    <div>
      <h1>Example:</h1>
      <LazyComponent code="local-component" onLoad={(a: any) => console.log('onLoad:', a)} />
    </div>
  );
}

export const LocalComponent = () => (
  <ComponentsProvider components={components}>
    <TestLocalComponent />
  </ComponentsProvider>
);

function TestAsyncComponent() {
  return (
    <div>
      <h1>Example:</h1>
      <LazyComponent
        code="slot"
        data={{ list: [{ title: 'item-1' }, { title: 'item-2' }] }}
        meta={{}}
        ctx={ctx}
        onLoad={(a: any) => console.log('onLoad:', a)}
      />
    </div>
  );
}

export const AsyncComponent = () => (
  <ComponentsProvider components={components}>
    <TestAsyncComponent />
  </ComponentsProvider>
);

function TestNotFoundCode() {
  const [errMsg, setErrMsg] = React.useState('');
  return (
    <div>
      <h1>Example:</h1>
      <LazyComponent
        code="no-code"
        onError={(err) => {
          setErrMsg(err.message);
        }}
      />
      {errMsg && <pre>Error message: {errMsg}</pre>}
    </div>
  );
}

export const NotFoundCode = () => (
  <ComponentsProvider components={components}>
    <TestNotFoundCode />
  </ComponentsProvider>
);

function TestComponentHasError() {
  const [errMsg, setErrMsg] = React.useState('');
  return (
    <div>
      <h1>Example:</h1>
      <LazyComponent
        code="slot"
        onError={(err, errInfo) => {
          setErrMsg(err.message);
          console.log(errInfo);
        }}
      />
      {errMsg && <pre>Error message: {errMsg}</pre>}
    </div>
  );
}

export const ComponentHasError = () => (
  <ComponentsProvider components={components}>
    <TestComponentHasError />
  </ComponentsProvider>
);

function TestErrorUrl() {
  const [errMsg, setErrMsg] = React.useState('');
  return (
    <div>
      <h1>Example:</h1>
      <LazyComponent
        code="error-url"
        onError={(err) => {
          setErrMsg(err.message);
        }}
      />
      {errMsg && <pre>Error message: {errMsg}</pre>}
    </div>
  );
}

export const ErrorUrl = () => (
  <ComponentsProvider components={components}>
    <TestErrorUrl />
  </ComponentsProvider>
);

function TestDecorator() {
  return (
    <div>
      <h1>Example:</h1>
      <LazyComponent code="test-decorator" data1="foo" data2="bar" />
    </div>
  );
}

export const Decorator = () => (
  <ComponentsProvider components={components}>
    <TestDecorator />
  </ComponentsProvider>
);
