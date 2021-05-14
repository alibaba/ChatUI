import React, { useState } from 'react';
import { DemoPage, DemoSection } from '../components';
import { Radio, RadioGroup, RadioValue } from '../../../src';
import '../../../src/styles/index.less';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear', disabled: true },
  { label: 'Orange', value: 'Orange' },
  { label: 'Banana', value: 'Banana' },
];

export default () => {
  const [value, setValue] = useState<RadioValue>('a');

  function handleChange(val: RadioValue) {
    setValue(val);
  }

  return (
    <DemoPage>
      <DemoSection title="基础用法">
        <Radio label="备选项A" value="a" />
        <Radio label="备选项B" value="b" checked />
        <Radio label="备选项C" value="c" disabled />
      </DemoSection>
      <DemoSection title="单选框组">
        <RadioGroup value={value} options={options} onChange={handleChange} />
      </DemoSection>
    </DemoPage>
  );
};
