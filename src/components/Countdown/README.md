# Countdown 倒计时组件

Countdown 倒计时组件，用于显示距离目标时间的剩余时间，支持小时、分钟、秒的显示。

## 代码演示

```jsx
import React from 'react';
import { Countdown } from '@chatui/core';

export default function() {
  const targetDate = Date.now() + 3600000; // 1小时后的时间戳

  return (
    <Countdown
      targetDate={targetDate}
      onEnd={() => console.log('倒计时结束')}
    />
  );
}
```

## Props

### CountdownProps

继承自 [useCountdown](/Users/akai/Repos/chatui/core/src/hooks/useCountdown.ts) 的 Options：

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| targetDate | string \| number \| Date | - | 目标日期时间 |
| onEnd | () => void | - | 倒计时结束时的回调函数 |

## 示例

```jsx
// 显示格式为 HH : MM : SS
<Countdown targetDate="2025-12-31 23:59:59" />
```
