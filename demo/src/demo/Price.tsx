import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Price } from '../../../src';
import '../../../src/styles/index.less';

const number = 1234567.89;

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Price price={123.45} />
    </DemoSection>
    <DemoSection title="货币符号">
      <Price price={123.45} currency="$" />
    </DemoSection>
    <DemoSection title="原价">
      <Price price={123.45} original />
    </DemoSection>
    <DemoSection title="国际化">
      <div>
        <span>人民币：</span>
        <Price price={number} locale="zh-CN" currency="CNY" />
      </div>
      <div>
        <span>港元：</span>
        <Price price={number} locale="zh-HK" currency="HKD" />
      </div>
      <div>
        <span>美元：</span>
        <Price price={number} locale="en-US" currency="USD" />
      </div>
      <div>
        <span>欧元：</span>
        <Price price={number} locale="de-DE" currency="EUR" />
      </div>
      <div>
        <span>英镑：</span>
        <Price price={number} locale="en-GB" currency="GBP" />
      </div>
      <div>
        <span>日圆：</span>
        <Price price={number} locale="ja-JP" currency="JPY" />
      </div>
      <div>
        <span>泰铢：</span>
        <Price price={number} locale="th-TH" currency="THB" />
      </div>
    </DemoSection>
  </DemoPage>
);
