# VisuallyHidden 视觉隐藏组件

VisuallyHidden 视觉隐藏组件用于将内容在视觉上隐藏，但保持可访问性（screen reader 可读）。

## 代码演示

```jsx
import React from 'react';
import { VisuallyHidden } from '@chatui/core';

export default function() {
  return (
    <div>
      <VisuallyHidden>
        <span>这段文字会被屏幕阅读器读取，但不会显示在页面上</span>
      </VisuallyHidden>

      <button>
        <VisuallyHidden>关闭</VisuallyHidden>
        <span aria-hidden>X</span>
      </button>
    </div>
  );
}
```

## 使用场景

- 为图标按钮提供可访问性文本
- 为视觉装饰性元素提供替代文本
- 在不破坏 UI 设计的情况下添加额外信息
