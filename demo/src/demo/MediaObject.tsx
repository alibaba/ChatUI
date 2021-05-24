import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { MediaObject } from '../../../src';
import '../../../src/styles/index.less';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <MediaObject
        picUrl="https://gw.alicdn.com/tfs/TB17TaySSzqK1RjSZFHXXb3CpXa-80-80.svg"
        picAlt="ChatUI"
        picSize="lg"
        title="ChatUI"
        meta="服务于对话领域的设计和开发体系，助力智能对话机器人的搭建"
      />
    </DemoSection>
  </DemoPage>
);
