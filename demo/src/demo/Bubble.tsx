import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Bubble } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="文本气泡">
      <div className="Message left">
        <div className="Message-content">
          <Bubble type="text">
            <p>左边气泡内容</p>
          </Bubble>
        </div>
      </div>
      <div className="Message right">
        <div className="Message-content">
          <Bubble content="右边气泡内容" />
        </div>
      </div>
    </DemoSection>
    <DemoSection title="图片气泡">
      <div className="Message left">
        <div className="Message-content">
          <Bubble type="image">
            <img src="https://gw.alicdn.com/tfs/TB1HURhcBCw3KVjSZR0XXbcUpXa-750-364.png" alt="" />
          </Bubble>
        </div>
      </div>
      <div className="Message right">
        <div className="Message-content">
          <Bubble type="image">
            <img src="https://gw.alicdn.com/tfs/TB1I6i2vhD1gK0jSZFsXXbldVXa-620-320.jpg" alt="" />
          </Bubble>
        </div>
      </div>
    </DemoSection>
  </DemoPage>
);
