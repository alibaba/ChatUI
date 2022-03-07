import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { PullToRefresh } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <div style={{ height: '300px', padding: '12px', border: '1px solid #ccc' }}>
        <PullToRefresh onRefresh={() => Promise.resolve({})}>
          <div>list</div>
        </PullToRefresh>
      </div>
    </DemoSection>
  </DemoPage>
);
