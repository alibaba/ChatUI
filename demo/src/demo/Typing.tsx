import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Typing } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法" bg="gray">
      <div className="Message-content">
        <Typing />
      </div>
    </DemoSection>
    <DemoSection title="自定义文字" bg="gray">
      <div className="Message-content">
        <Typing text="输入中" />
      </div>
    </DemoSection>
  </DemoPage>
);
