# RateActions 评价组件

RateActions 评价组件用于展示赞同/反对的评价按钮。

## 代码演示

```jsx
import React from 'react';
import { RateActions } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>默认评价</h3>
      <RateActions
        onClick={(value) => console.log('评价:', value)}
      />

      <h3>自定义文本</h3>
      <RateActions
        upTitle="很棒"
        downTitle="一般"
        onClick={(value) => console.log('评价:', value)}
      />
    </div>
  );
}
```

## Props

### RateActionsProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| upTitle | string | '赞同' | 赞同按钮文本 |
| downTitle | string | '反对' | 反对按钮文本 |
| onClick | (value: 'up' \| 'down') => void | - | 点击回调 |
