import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Loading } from '../../../src';
import '../../../src/styles/index.less';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Loading />
    </DemoSection>
    <DemoSection title="加载文案">
      <Loading tip="加载中..." />
    </DemoSection>
  </DemoPage>
);
