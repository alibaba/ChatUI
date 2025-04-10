import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Notice } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法" bg="gray">
      <div style={{ position: 'relative', height: '60px' }}>
        <Notice content="小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容" />
      </div>
    </DemoSection>
    <DemoSection title="没有关闭" bg="gray">
      <div style={{ position: 'relative', height: '60px' }}>
        <Notice
          closable={false}
          content="小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容"
        />
      </div>
    </DemoSection>
    <DemoSection title="短文字" bg="gray">
      <div style={{ position: 'relative', height: '60px' }}>
        <Notice content="小蜜公告内容小蜜公告内容" />
      </div>
    </DemoSection>
    <DemoSection title="左按钮" bg="gray">
      <div style={{ position: 'relative', height: '60px' }}>
        <Notice content="小蜜公告内容" leftIcon="warning-circle-fill" />
      </div>
    </DemoSection>
  </DemoPage>
);
