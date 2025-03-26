import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Quote, Text, Image, Video } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Quote author="官方客服">
        <Text>亲，您好我是官方客服014964，马上为您服务～</Text>
      </Quote>
    </DemoSection>
    <DemoSection title="长内容">
      <Quote author="官方客服">
        <Text truncate={2}>
          我们会帮您联系物流催促配送，后续会在24小时内联系您的手机号158****0702。我们会帮您联系物流催促配送，后续会在24小时内联系您的手机号158****0702。
        </Text>
      </Quote>
    </DemoSection>
    <DemoSection title="图片">
      <Quote author="官方客服">
        <Image src="//gw.alicdn.com/tfs/TB1GRW3voY1gK0jSZFMXXaWcVXa-620-320.jpg" />
      </Quote>
    </DemoSection>
    <DemoSection title="视频">
      <Quote author="官方客服">
        <Video
          cover="//img.alicdn.com/imgextra/i1/6000000000012/O1CN01vlHyZv1BxXNDA564X_!!6000000000012-0-tbvideo.jpg"
          src="//cloud.video.taobao.com/play/u/3544775890/p/1/e/6/t/1/277895493609.mp4"
        />
      </Quote>
    </DemoSection>
  </DemoPage>
);
