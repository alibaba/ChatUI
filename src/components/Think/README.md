# Think 思考组件

Think 思考组件用于展示 AI 思考过程，支持折叠/展开和完成状态展示。

## 代码演示

```jsx
import React from 'react';
import { Think } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>思考中</h3>
      <Think isDone={false}>
        <p>正在分析问题...</p>
        <p>思考步骤 1: 理解用户需求</p>
        <p>思考步骤 2: 检索相关信息</p>
      </Think>

      <h3>已完成</h3>
      <Think isDone={true} thinkTime={3}>
        <p>分析完成</p>
        <p>最终结论: 这是一个测试问题</p>
      </Think>
    </div>
  );
}
```

## Props

### ThinkProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| isDone | boolean | - | 是否完成思考 |
| thinkTime | number | - | 思考用时（秒） |
| children | ReactNode | - | 思考内容 |
