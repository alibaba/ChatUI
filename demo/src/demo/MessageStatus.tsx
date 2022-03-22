import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { MessageStatus } from '../../../src';

export default () => {
  return (
    <DemoPage>
      <DemoSection title="基础用法（1.5秒后出 loading，5秒后失败）">
        <MessageStatus status="pending" />
      </DemoSection>
      <DemoSection title="发送成功">
        <MessageStatus status="sent" />
      </DemoSection>
      <DemoSection title="发送失败">
        <MessageStatus status="fail" />
      </DemoSection>
    </DemoPage>
  );
};
