import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { RateActions, LocaleProvider } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法" bg="gray">
      <RateActions
        onClick={(val: string) => {
          console.log(val);
        }}
      />
    </DemoSection>
    <DemoSection title="多语言（英文）" bg="gray">
      <LocaleProvider locale="en-US">
        <RateActions
          onClick={(val: string) => {
            console.log(val);
          }}
        />
      </LocaleProvider>
    </DemoSection>
    <DemoSection title="修改 title" bg="gray">
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
