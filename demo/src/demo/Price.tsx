import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Price } from '../../../src';
import '../../../src/styles/index.less';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Price price="123.45" />
    </DemoSection>
    <DemoSection title="货币符号">
      <Price price="123.45" currency="$" />
    </DemoSection>
    <DemoSection title="原价">
      <Price price="123.45" original />
    </DemoSection>
  </DemoPage>
);
