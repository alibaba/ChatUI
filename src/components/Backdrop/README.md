# Backdrop 遮罩层组件

Backdrop 组件用于创建半透明的遮罩层，通常作为弹窗、抽屉等组件的背景。

## 使用场景

- 弹窗背景
- 抽屉背景
- 加载遮罩
- 模态对话框
- 页面遮挡

## 代码演示

```jsx
import React, { useState } from 'react';
import { Backdrop, Button } from '@chatui/core';

export default function() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <Button onClick={() => setActive(true)}>显示遮罩</Button>

      <Backdrop
        active={active}
        onClick={() => setActive(false)}
      />
    </div>
  );
}
```

## Props

### BackdropProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| active | boolean | `false` | 是否显示遮罩 |
| onClick | () => void | - | 点击遮罩回调 |

## 注意事项

- Backdrop 会挂载到 document.body
- 显示时会阻止页面滚动
- 通常与 Modal、Popup 等组件配合使用
- 点击遮罩层会触发 onClick 回调
