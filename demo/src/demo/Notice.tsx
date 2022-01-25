import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Notice } from '../../../src';
import '../../../src/styles/index.less';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <div style={{ position: 'relative', height: '150px' }}>
        <Notice content="小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容" />
      </div>
    </DemoSection>
    <DemoSection title="没有关闭">
      <div style={{ position: 'relative', height: '150px' }}>
        <Notice
          hasClose={false}
          content="小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容"
        />
      </div>
    </DemoSection>
    <DemoSection title="单行">
      <div style={{ position: 'relative', height: '150px' }}>
        <Notice content="小蜜公告内容小蜜公告内容" />
      </div>
    </DemoSection>
    <DemoSection title="两行">
      <div style={{ position: 'relative', height: '150px' }}>
        <Notice content="小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容" />
      </div>
    </DemoSection>
    <DemoSection title="多行">
      <div style={{ position: 'relative', height: '150px' }}>
        <Notice content="小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容" />
      </div>
    </DemoSection>
    <DemoSection title="链接">
      <div style={{ position: 'relative', height: '150px' }}>
        <Notice
          content="小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容小蜜公告内容"
          url="https://chatui.io/"
          onLinkClick={(url) => {
            console.log(url);
          }}
        />
      </div>
    </DemoSection>
    <DemoSection title="富文本">
      <div style={{ position: 'relative', height: '150px' }}>
        <Notice content="小蜜公告内容小蜜公告内容小<br>蜜公告内容<strong>小蜜</strong>公告内容<br>小蜜公告内容<em>小蜜公告</em>内容<br>小蜜公告内容" />
      </div>
    </DemoSection>
  </DemoPage>
);
