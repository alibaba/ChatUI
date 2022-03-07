import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Search } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Search placeholder="输入宝贝关键词等" />
    </DemoSection>
    <DemoSection title="禁用状态">
      <Search disabled aria-label="Search" />
    </DemoSection>
    <DemoSection title="不启用清除图标">
      <Search clearable={false} />
    </DemoSection>
  </DemoPage>
);
