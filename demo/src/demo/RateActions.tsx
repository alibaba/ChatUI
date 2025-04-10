import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { RateActions, ConfigProvider } from '../../../src';

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
      <ConfigProvider locale="en-US">
        <RateActions
          onClick={(val: string) => {
            console.log(val);
          }}
        />
      </ConfigProvider>
    </DemoSection>
    <DemoSection title="修改 title" bg="gray">
      <ConfigProvider locale="en-US">
        <RateActions
          upTitle="Like"
          downTitle="Unlike"
          onClick={(val: string) => {
            console.log(val);
          }}
        />
      </ConfigProvider>
    </DemoSection>
  </DemoPage>
);
