# Quote 引用组件

Quote 引用组件用于展示引用内容，支持引用作者和引用内容。

## 代码演示

```jsx
import React from 'react';
import { Quote } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础引用</h3>
      <Quote>
        这是一段被引用的内容。
      </Quote>

      <h3>带作者引用</h3>
      <Quote author="鲁迅">
        我家门前有两棵树，一棵是枣树，另一棵也是枣树。
      </Quote>

      <h3>可点击引用</h3>
      <Quote
        author="爱因斯坦"
        onClick={() => console.log('查看原文')}
      >
        想象力比知识更重要。
      </Quote>
    </div>
  );
}
```

## Props

### QuoteProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| author | string | - | 引用作者 |
| children | ReactNode | - | 引用内容 |
| onClick | (e: React.MouseEvent) => void | - | 点击事件回调 |
