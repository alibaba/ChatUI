import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Notice } from '../../../src';
import '../../../src/styles/index.less';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法" bg="light-2">
      <div style={{ position: 'relative', height: '60px' }}>
        <Notice content="小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容" />
      </div>
    </DemoSection>
    <DemoSection title="没有关闭" bg="light-2">
      <div style={{ position: 'relative', height: '60px' }}>
        <Notice
          closable={false}
          content="小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容"
        />
      </div>
    </DemoSection>
    <DemoSection title="文字" bg="light-2">
      <div style={{ position: 'relative', height: '60px' }}>
        <Notice content="小蜜公告内容小蜜公告内容" />
      </div>
    </DemoSection>
    <DemoSection title="右按钮" bg="light-2">
      <div style={{ position: 'relative', height: '60px' }}>
        <Notice content="小蜜公告内容" rightIcon="chevron-right" />
      </div>
    </DemoSection>
  </DemoPage>
);
