/* eslint-disable compat/compat */
import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Video } from '../../../src';
import '../../../src/styles/index.less';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Video
        cover="//img.alicdn.com/imgextra/i1/6000000000012/O1CN01vlHyZv1BxXNDA564X_!!6000000000012-0-tbvideo.jpg"
        src="//cloud.video.taobao.com/play/u/3544775890/p/1/e/6/t/1/277895493609.mp4"
        duration="46"
      />
    </DemoSection>
  </DemoPage>
);
