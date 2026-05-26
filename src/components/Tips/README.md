# Tips 提示组件

Tips 提示组件用于展示提示信息，支持不同尺寸和主题色。

## 代码演示

```jsx
import React from 'react';
import { Tips } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础提示</h3>
      <Tips>
        这是一条普通提示信息
      </Tips>

      <h3>主要提示</h3>
      <Tips primary>
        这是一条主要提示信息
      </Tips>

      <h3>大尺寸提示</h3>
      <Tips size="lg" icon="info-circle">
        大尺寸提示信息，支持更长的内容描述
      </Tips>

      <h3>自定义图标</h3>
      <Tips icon="warning">
        警告提示信息
      </Tips>
    </div>
  );
}
```

## Props

### TipsProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| size | 'md' \| 'lg' | - | 尺寸 |
| primary | boolean | - | 是否为主要提示 |
| icon | string | 'info-circle' | 图标类型，设置为空字符串可隐藏图标 |
| children | ReactNode | - | 提示内容 |
