import React, { useState } from 'react';
import { DemoPage, DemoSection } from '../components';
import { Checkbox, CheckboxGroup, CheckboxValue } from '../../../src';
import '../../../src/styles/index.less';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear', disabled: true },
  { label: 'Orange', value: 'Orange' },
  { label: 'Banana', value: 'Banana' },
];

export default () => {
  const [value1, setValue] = useState<CheckboxValue[]>(['Apple']);
  const [value2, setValue2] = useState<CheckboxValue[]>([]);
  const [checked, setChecked] = useState(false);

  function handleChange(val: CheckboxValue[]) {
    setValue(val);
  }

  function handleChange2(val: CheckboxValue[]) {
    setValue2(val);
  }

  return (
    <DemoPage>
      <DemoSection title="基础用法">
        <Checkbox value="abc" label="ABC" checked={checked} onChange={() => setChecked(!checked)} />
      </DemoSection>
      <DemoSection title="禁用状态">
        <Checkbox value="abc" label="ABC" disabled />
      </DemoSection>
      <DemoSection title="复选框组">
        <CheckboxGroup value={value1} options={options} onChange={handleChange} />
      </DemoSection>
      <DemoSection title="块级显示">
        <CheckboxGroup value={value2} options={options} onChange={handleChange2} block />
      </DemoSection>
    </DemoPage>
  );
};
