import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { RateActions, LocaleProvider } from '../../../src';
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
    <DemoSection title="多语言（英文）">
      <LocaleProvider locale="en-US">
        <RateActions
          onClick={(val: string) => {
            console.log(val);
          }}
        />
      </LocaleProvider>
    </DemoSection>
    <DemoSection title="修改 title">
      <LocaleProvider locale="en-US">
        <RateActions
          upTitle="Like"
          downTitle="Unlike"
          onClick={(val: string) => {
            console.log(val);
          }}
        />
      </LocaleProvider>
    </DemoSection>
  </DemoPage>
);
