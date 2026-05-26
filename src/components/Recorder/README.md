# Recorder 录音组件

Recorder 录音组件用于语音消息录制，支持按住说话、上滑取消等功能。

## 代码演示

```jsx
import React, { useRef } from 'react';
import { Recorder } from '@chatui/core';

export default function() {
  const recorderRef = useRef();

  return (
    <Recorder
      ref={recorderRef}
      onStart={() => console.log('开始录音')}
      onEnd={({ duration }) => console.log('录音结束，时长:', duration)}
      onCancel={() => console.log('取消录音')}
    />
  );
}
```

## Props

### RecorderProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| canRecord | boolean | - | 是否可以录音 |
| volume | number | - | 音量大小（0-100） |
| onStart | () => void | - | 开始录音回调 |
| onEnd | (data: { duration: number }) => void | - | 结束录音回调 |
| onCancel | () => void | - | 取消录音回调 |

### RecorderHandle

| 方法 | 说明 |
| --- | --- |
| stop | 停止录音 |

## 使用说明

- 按住说话按钮开始录音
- 松开手指发送录音
- 向上滑动可取消录音
