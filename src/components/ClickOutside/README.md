# ClickOutside 点击外部组件

ClickOutside 组件用于检测点击事件是否发生在指定元素外部，常用于实现下拉菜单、弹出框等组件的点击外部关闭功能。

## 代码演示

```jsx
import React, { useState } from 'react';
import { ClickOutside } from '@chatui/core';

export default function() {
  const [visible, setVisible] = useState(true);

  return (
    <ClickOutside onClick={() => setVisible(false)}>
      <div style={{ padding: 20, background: '#f5f5f5' }}>
        点击外部区域关闭
      </div>
    </ClickOutside>
  );
}
```

## Props

### ClickOutsideProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| onClick | (event: React.MouseEvent) => void | - | 点击外部时的回调函数 |
| mouseEvent | 'click' \| 'mousedown' \| 'mouseup' | 'mouseup' | 监听的事件类型 |
| children | ReactNode | - | 子元素 |
