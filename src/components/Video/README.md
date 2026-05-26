# Video 视频组件

Video 视频组件用于播放视频，支持封面图、时长显示等功能。

## 代码演示

```jsx
import React from 'react';
import { Video } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础视频</h3>
      <Video
        src="//example.com/video.mp4"
        cover="//example.com/poster.jpg"
        duration={120}
      />

      <h3>带点击事件</h3>
      <Video
        src="//example.com/video.mp4"
        cover="//example.com/poster.jpg"
        onClick={(paused) => console.log('播放状态:', paused ? '暂停' : '播放中')}
        onCoverLoad={() => console.log('封面图加载完成')}
      />

      <h3>原生 video 属性</h3>
      <Video
        src="//example.com/video.mp4"
        autoPlay
        loop
        muted
      />
    </div>
  );
}
```

## Props

继承自 HTML video 元素的属性：

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| src | string | - | 视频地址 |
| cover | string | - | 封面图片地址 |
| duration | string \| number | - | 视频时长 |
| style | CSSProperties | - | 内联样式 |
| videoRef | RefObject | - | video 元素 ref |
| onClick | (paused: boolean, event: React.MouseEvent) => void | - | 点击回调 |
| onCoverLoad | (event: React.SyntheticEvent) => void | - | 封面图加载完成回调 |
