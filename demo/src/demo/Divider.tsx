import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Divider } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Divider />
    </DemoSection>
    <DemoSection title="展示文字">
      <Divider>文本</Divider>
    </DemoSection>
    <DemoSection title="内容位置">
      <Divider>文本</Divider>
      <Divider position="left">左文本</Divider>
      <Divider position="right">右文本</Divider>
    </DemoSection>
  </DemoPage>
);
