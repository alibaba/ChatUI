import React, { useRef } from 'react';
import { DemoPage, DemoSection } from '../components';
import { Portal } from '../../../src';
import '../../../src/styles/index.less';

export default () => {
  const containerRef = useRef(null);
  return (
    <DemoPage>
      <DemoSection title="基础用法">
        <Portal>
          <p>出现到 `document.body`</p>
        </Portal>
      </DemoSection>
      <DemoSection title="指定容器（ref）">
        <div ref={containerRef} />
        <Portal container={containerRef}>
          <p>出现到指定 `ref`</p>
        </Portal>
      </DemoSection>
      <DemoSection title="指定容器（元素）">
        <Portal container={document.querySelector('#root')}>
          <p>出现到指定元素</p>
        </Portal>
      </DemoSection>
    </DemoPage>
  );
};
