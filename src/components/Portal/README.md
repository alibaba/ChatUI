# Portal 传送门组件

Portal 传送门组件用于将子元素渲染到 DOM 树的其他位置，常用于实现模态框、弹出层等组件。

## 代码演示

```jsx
import React from 'react';
import { Portal } from '@chatui/core';

export default function() {
  return (
    <Portal container={document.body}>
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: 20,
        background: '#fff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
      }}>
        模态框内容
      </div>
    </Portal>
  );
}
```

## Props

### PortalProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| container | Element \| RefObject \| (() => Element) \| null | document.body | 渲染到的容器 |
| onRendered | () => void | - | 渲染完成后的回调 |
| children | ReactNode | - | 子元素 |
