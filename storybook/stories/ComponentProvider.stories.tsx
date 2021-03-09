import React, { useEffect } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import * as ChatUI from '../../src';
import { ComponentsMap, LazyComponentOnLoadParams } from '../../src';

const { ComponentsProvider, LazyComponent, useComponents } = ChatUI;

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
  'test-async-decorator': {
    decorator: 'slot',
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
      <LazyComponent
        code="local-component"
        data="11"
        onLoad={(a: any) => console.log('onLoad:', a)}
      />
    </div>
  );
}

export const LocalComponent = () => (
  <ComponentsProvider components={components}>
    <TestLocalComponent />
  </ComponentsProvider>
);

function LazySlot() {
  const data = { list: [{ title: 'item-1' }, { title: 'item-2' }] };
  return (
    <LazyComponent
      code="slot"
      data={data}
      meta={{}}
      ctx={ctx}
      onLoad={(r: LazyComponentOnLoadParams) => console.log('slot - onLoad:', r)}
    />
  );
}

function LazyRecommend() {
  const data = {
    recommends: [
      {
        knowledgeId: 'q1',
        title: 'Question 1',
      },
      {
        knowledgeId: 'q2',
        title: 'Question 2',
      },
      {
        knowledgeId: 'q3',
        title: 'Question 3',
      },
    ],
  };
  return (
    <LazyComponent
      code="recommend"
      data={data}
      meta={{}}
      ctx={ctx}
      onLoad={(r: any) => console.log('recommend - onLoad:', r)}
      onError={(e: Error) => console.log('recommend - onError:', e)}
    />
  );
}

export const AsyncComponent = () => (
  <ComponentsProvider components={components}>
    <LazySlot />
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
          console.log(222, err, errInfo);
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
          console.log(222, err.message);
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
      <LazyComponent
        code="test-decorator"
        data1="foo"
        data2="bar"
        onLoad={(r) => {
          console.log('decorator onLoad', r);
        }}
      />
    </div>
  );
}

export const Decorator = () => (
  <ComponentsProvider components={components}>
    <TestDecorator />
  </ComponentsProvider>
);

function TestAsyncDecorator() {
  return (
    <div>
      <h1>Example:</h1>
      <LazyComponent
        code="test-async-decorator"
        data={{ list: [{ title: 'item-1' }, { title: 'item-2' }] }}
        meta={{}}
        ctx={ctx}
        onLoad={(r) => {
          console.log('async decorator onLoad', r);
        }}
      />
    </div>
  );
}

export const AsyncDecorator = () => (
  <ComponentsProvider components={components}>
    <TestAsyncDecorator />
  </ComponentsProvider>
);

function TestAddComponent() {
  const { addComponent, hasComponent } = useComponents();
  const forceUpdate = useForceUpdate();

  function addRecommend() {
    if (!hasComponent('recommend')) {
      addComponent('recommend', {
        name: 'AlimeComponentRecommend',
        url: '//g.alicdn.com/alime-components/recommend/0.1.0/index.js',
      });
      // forceUpdate();
    }
  }

  const onClick = React.useCallback(() => {
    forceUpdate();
  }, [forceUpdate]);

  function handleImgLoad(e: any) {
    console.log('img load', e);
  }

  return (
    <div>
      <img onLoad={handleImgLoad} src="11" alt="" />
      <button type="button" onClick={onClick}>
        update inner
      </button>
      <button onClick={addRecommend}>add recommend</button>
      <LazyRecommend />
    </div>
  );
}

function useForceUpdate() {
  const [, forceUpdate] = React.useState(false);

  return React.useCallback(() => {
    forceUpdate((s) => !s);
  }, []);
}

export const AddComponent = () => {
  const forceUpdate = useForceUpdate();
  const renderCount = React.useRef(0);

  React.useEffect(() => {
    renderCount.current += 1;
  });

  const onClick = React.useCallback(() => {
    forceUpdate();
  }, [forceUpdate]);

  return (
    <div>
      <button type="button" onClick={onClick}>
        update
      </button>
      <div>Render count: {renderCount.current}</div>

      <ComponentsProvider components={components}>
        <TestAddComponent />
      </ComponentsProvider>

      <ComponentsProvider components={components}>
        <LazySlot />
      </ComponentsProvider>
    </div>
  );
};

export const MutableComponents = () => {
  const [myComponents, setMyMyComponents] = React.useState({});
  const forceUpdate = useForceUpdate();

  function addSlot() {
    setMyMyComponents({
      ...myComponents,
      slot: {
        name: 'AlimeComponentSlot',
        url: '//g.alicdn.com/alime-components/slot/0.1.3/index.js',
      },
    });
  }

  function addRecommend() {
    setMyMyComponents({
      ...myComponents,
      recommend: {
        name: 'AlimeComponentRecommend',
        url: '//g.alicdn.com/alime-components/recommend/0.1.0/index.js',
      },
    });
  }

  const onClick = React.useCallback(() => {
    forceUpdate();
  }, [forceUpdate]);

  return (
    <div>
      <button type="button" onClick={onClick}>
        update
      </button>
      <button onClick={addSlot}>add slot</button>
      <button onClick={addRecommend}>add recommend</button>
      <ComponentsProvider components={myComponents}>
        <LazySlot />
        <LazyRecommend />
      </ComponentsProvider>
    </div>
  );
};
