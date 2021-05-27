import React, { useState } from 'react';
import { DemoPage, DemoSection } from '../components';
import { Select } from '../../../src';
import '../../../src/styles/index.less';

export default () => {
  const [value1, setValue1] = useState('');

  return (
    <DemoPage>
      <DemoSection title="基础用法">
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </DemoSection>
      <DemoSection title="禁用状态">
        <Select placeholder="Select option" disabled>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <br />
        <Select placeholder="Pick one">
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="ng" disabled>
            Angular
          </option>
          <option value="svelte">Svelte</option>
        </Select>
      </DemoSection>
      <DemoSection title="受控的">
        <Select
          value={value1}
          placeholder="Select option"
          onChange={(e) => {
            setValue1(e.target.value);
          }}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </DemoSection>
      <DemoSection title="变体">
        <Select placeholder="Default (Outline)" />
        <br />
        <Select placeholder="Outline" variant="outline" />
        <br />
        <Select placeholder="Filled" variant="filled" />
        <br />
        <Select placeholder="Flushed" variant="flushed" />
      </DemoSection>
    </DemoPage>
  );
};
