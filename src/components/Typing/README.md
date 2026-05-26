# Typing 输入状态组件

Typing 组件用于显示对方正在输入的状态提示。

## 使用场景

- 聊天输入提示
- 实时反馈
- 状态展示
- 等待提示
- 交互反馈

## 代码演示

```jsx
import React, { useState } from 'react';
import { Typing, Button } from '@chatui/core';

export default function() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h3>基础用法</h3>
      <Button onClick={() => setVisible(!visible)}>
        {visible ? '隐藏' : '显示'}输入状态
      </Button>

      {visible && <Typing />}

      <h3>自定义文本</h3>
      {visible && <Typing text="对方正在输入..." />}
    </div>
  );
}
```

## Props

### TypingProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| text | string | - | 提示文本 |

## 注意事项

- Typing 显示动画效果的省略号
- 适合在对方输入时显示
- 通常配合 WebSocket 实时通信使用
