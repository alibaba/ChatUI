import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Empty, Button } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Empty tip="暂无数据" />
    </DemoSection>
    <DemoSection title="定制内容">
      <Empty type="error" tip="oops..加载失败，点击重试">
        <Button color="primary">刷新</Button>
      </Empty>
    </DemoSection>
  </DemoPage>
);
