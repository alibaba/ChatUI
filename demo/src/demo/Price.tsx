import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Price } from '../../../src';

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
    <DemoSection title="自适应大小">
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td>
              <Price price={5} autoFit locale="zh-CN" currency="CNY" />
            </td>
            <td>
              <Price price={5.8} autoFit locale="zh-CN" currency="CNY" />
            </td>
            <td>
              <Price price={5.88} autoFit locale="zh-CN" currency="CNY" />
            </td>
          </tr>
          <tr>
            <td>
              <Price price={50} autoFit locale="zh-CN" currency="CNY" />
            </td>
            <td>
              <Price price={50.8} autoFit locale="zh-CN" currency="CNY" />
            </td>
            <td>
              <Price price={50.88} autoFit locale="zh-CN" currency="CNY" />
            </td>
          </tr>
          <tr>
            <td>
              <Price price={500} autoFit locale="zh-CN" currency="CNY" />
            </td>
            <td>
              <Price price={500.8} autoFit locale="zh-CN" currency="CNY" />
            </td>
            <td>
              <Price price={500.88} autoFit locale="zh-CN" currency="CNY" />
            </td>
          </tr>
          <tr>
            <td>
              <Price price={5000} autoFit locale="zh-CN" currency="CNY" />
            </td>
            <td>
              <Price price={5000.8} autoFit locale="zh-CN" currency="CNY" />
            </td>
            <td>
              <Price price={5000.88} autoFit locale="zh-CN" currency="CNY" />
            </td>
          </tr>
          <tr>
            <td>
              <Price price={50000} autoFit locale="zh-CN" currency="CNY" />
            </td>
            <td>
              <Price price={50000.8} autoFit locale="zh-CN" currency="CNY" />
            </td>
            <td>
              <Price price={50000.88} autoFit locale="zh-CN" currency="CNY" />
            </td>
          </tr>
        </tbody>
      </table>
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
