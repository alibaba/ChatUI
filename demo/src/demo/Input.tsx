import React, { useState } from 'react';
import { DemoPage, DemoSection } from '../components';
import { Input } from '../../../src';
import '../../../src/styles/index.less';

export default () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

  return (
    <DemoPage>
      <DemoSection title="基础用法">
        <Input value={value1} onChange={(val) => setValue1(val)} placeholder="请输入..." />
      </DemoSection>
      <DemoSection title="多行输入">
        <Input rows={3} value={value2} onChange={(val) => setValue2(val)} placeholder="请输入..." />
      </DemoSection>
      <DemoSection title="高度自适应">
        <Input autoSize value={value3} onChange={(val) => setValue3(val)} placeholder="请输入..." />
      </DemoSection>
      <DemoSection title="限制字数">
        <Input
          maxLength={20}
          value={value4}
          onChange={(val) => setValue4(val)}
          placeholder="请输入..."
        />
      </DemoSection>
    </DemoPage>
  );
};
