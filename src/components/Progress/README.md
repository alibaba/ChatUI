# Progress 进度条组件

Progress 组件用于展示操作或任务的进度。

## 使用场景

- 文件上传进度
- 任务完成度
- 加载进度
- 步骤进度
- 数据处理进度

## 代码演示

```jsx
import React, { useState, useEffect } from 'react';
import { Progress } from '@chatui/core';

export default function() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3>基础用法</h3>
      <Progress value={50} />

      <h3>动态进度</h3>
      <Progress value={percent} />

      <h3>显示百分比</h3>
      <Progress value={75} showText />

      <h3>自定义颜色</h3>
      <Progress value={60} color="green" />
    </div>
  );
}
```

## Props

### ProgressProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| value | number | `0` | 进度值（0-100） |
| showText | boolean | `false` | 是否显示百分比文本 |
| color | string | - | 进度条颜色 |

## 注意事项

- value 应该在 0-100 之间
- 超过 100 会被限制为 100
- 可以通过 color 属性自定义进度条颜色
