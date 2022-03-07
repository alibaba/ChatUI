import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Tag } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Tag>默认标签</Tag>
      <Tag color="primary">商品标签</Tag>
      <Tag color="success">成功状态</Tag>
      <Tag color="danger">失败状态</Tag>
      <Tag color="warning">警戒状态</Tag>
    </DemoSection>
  </DemoPage>
);
