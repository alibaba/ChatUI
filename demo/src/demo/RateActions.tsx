import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { RateActions } from '../../../src';
import '../../../src/styles/index.less';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <RateActions
        onClick={(val: string) => {
          console.log(val);
        }}
      />
    </DemoSection>
  </DemoPage>
);
