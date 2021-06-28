import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Image } from '../../../src';

const picUrl = '//gw.alicdn.com/tfs/TB1GRW3voY1gK0jSZFMXXaWcVXa-620-320.jpg';

const imgs = [
  '//gw.alicdn.com/tfs/TB1yGi2vfb2gK0jSZK9XXaEgFXa-320-240.png',
  '//gw.alicdn.com/tfs/TB1I6i2vhD1gK0jSZFsXXbldVXa-620-320.jpg',
  '//gw.alicdn.com/tfs/TB1GRW3voY1gK0jSZFMXXaWcVXa-620-320.jpg',
  '//gw.alicdn.com/tfs/TB1XCq4veH2gK0jSZFEXXcqMpXa-620-320.jpg',
  '//gw.alicdn.com/tfs/TB1dzG8vbj1gK0jSZFuXXcrHpXa-620-319.jpg',
];

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Image src={picUrl} width="299" height="200" alt="图片名" />
    </DemoSection>
    <DemoSection title="响应式图片">
      <Image src={picUrl} alt="Responsive image" fluid />
    </DemoSection>
    <DemoSection title="懒加载">
      {imgs.map((img) => (
        <div key={img}>
          <p style={{ margin: '120px 0', background: '#eee' }}>placeholder</p>
          <Image src={img} style={{ minWidth: '10px', minHeight: '200px' }} lazy fluid key={img} />
        </div>
      ))}
    </DemoSection>
  </DemoPage>
);
