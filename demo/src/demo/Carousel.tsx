import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Carousel, Image } from '../../../src';

const imgs = [
  '//gw.alicdn.com/tfs/TB1GRW3voY1gK0jSZFMXXaWcVXa-620-320.jpg',
  '//gw.alicdn.com/tfs/TB1I6i2vhD1gK0jSZFsXXbldVXa-620-320.jpg',
  '//gw.alicdn.com/tfs/TB1XCq4veH2gK0jSZFEXXcqMpXa-620-320.jpg',
  '//gw.alicdn.com/tfs/TB1dzG8vbj1gK0jSZFuXXcrHpXa-620-319.jpg',
];

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Carousel autoPlay>
        {imgs.map((img, i) => (
          <div>
            <p>{i}</p>
            <Image key={img} src={img} fluid />
          </div>
        ))}
      </Carousel>
    </DemoSection>
  </DemoPage>
);
