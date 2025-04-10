import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { SystemMessage } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <SystemMessage content="88VIP专属智能客服小蜜 为您服务" />
    </DemoSection>
    <DemoSection title="操作按钮">
      <SystemMessage
        content="正在联系人工客服"
        action={{
          text: '取消',
          onClick: () => {
            console.log('取消');
          },
        }}
      />
    </DemoSection>
  </DemoPage>
);
